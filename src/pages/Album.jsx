import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { albums, streamingLinks } from "../data/musicData";
import { useTranslation } from "react-i18next";

const PREVIEW_DURATION = 30;

export default function Album() {
  const { id } = useParams();
  const { t } = useTranslation();

  const album = albums.find((a) => a.id === id);
  const audioRefs = useRef({});
  const timerRef = useRef(null);
  const startedAtRef = useRef(0);
  const stoppedRef = useRef(false);

  const [activeTrack, setActiveTrack] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(PREVIEW_DURATION);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const stopAllTracks = () => {
    clearTimer();

    Object.values(audioRefs.current).forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    stoppedRef.current = true;
    setActiveTrack(null);
    setRemainingTime(PREVIEW_DURATION);
  };

  const stopPreview = (index) => {
    if (stoppedRef.current) return;

    stoppedRef.current = true;
    clearTimer();

    const audio = audioRefs.current[index];

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setActiveTrack(null);
    setRemainingTime(PREVIEW_DURATION);
    setShowModal(true);
  };

  const startPreview = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    clearTimer();

    Object.entries(audioRefs.current).forEach(([key, otherAudio]) => {
      if (otherAudio && Number(key) !== index) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
      }
    });

    stoppedRef.current = false;
    startedAtRef.current = Date.now();

    setActiveTrack(index);
    setShowModal(false);
    setRemainingTime(PREVIEW_DURATION);

    timerRef.current = setInterval(() => {
      if (stoppedRef.current) return;

      const elapsed = (Date.now() - startedAtRef.current) / 1000;
      const remaining = Math.max(0, Math.ceil(PREVIEW_DURATION - elapsed));

      setRemainingTime(remaining);

      if (elapsed >= PREVIEW_DURATION) {
        stopPreview(index);
      }
    }, 200);
  };

  useEffect(() => {
    const audioElements = audioRefs.current;

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }

      Object.values(audioElements).forEach((audio) => {
        if (audio) {
          audio.pause();
        }
      });
    };
  }, []);

  if (!album) {
    return (
      <div className="text-white p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">
          {t("album_not_found")}
        </h1>
        <Link
          to="/"
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
        >
          ← {t("back_to_albums")}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <Link
        to="/"
        onClick={stopAllTracks}
        className="inline-block mb-6 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
      >
        ← {t("back_to_albums")}
      </Link>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <img
          src={album.cover}
          alt={album.title}
          className="w-72 rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-3">{album.title}</h1>
          <p className="text-gray-400 text-lg">
            {t("released")}: {album.year}
          </p>
          <p className="mt-4 text-gray-300">
            {album.tracks.length} {t("songs")}
          </p>
          <p className="mt-4 text-sm text-gray-400">
            🎵 You can listen to a 30-second preview of each song.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {album.tracks.map((track, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl shadow">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold">
                  {index + 1}. {track.title}
                </h3>

                {activeTrack === index && (
                  <span className="text-sm text-purple-300">
                    {remainingTime}s
                  </span>
                )}
              </div>

              <audio
                ref={(element) => {
                  if (element) {
                    audioRefs.current[index] = element;
                  } else {
                    delete audioRefs.current[index];
                  }
                }}
                controls
                controlsList="nodownload noplaybackrate"
                preload="metadata"
                className="w-full"
                onPlay={() => {
                  if (activeTrack !== index || stoppedRef.current) {
                    startPreview(index);
                  }
                }}
                onPause={() => {
                  if (activeTrack === index && !stoppedRef.current) {
                    clearTimer();
                    setActiveTrack(null);
                  }
                }}
                onTimeUpdate={() => {
                  const audio = audioRefs.current[index];

                  if (
                    audio &&
                    !audio.paused &&
                    activeTrack === index &&
                    audio.currentTime >= PREVIEW_DURATION
                  ) {
                    stopPreview(index);
                  }
                }}
                onSeeking={(event) => {
                  if (event.currentTarget.currentTime >= PREVIEW_DURATION) {
                    event.currentTarget.currentTime = 0;
                  }
                }}
                onEnded={() => {
                  if (!stoppedRef.current && activeTrack === index) {
                    stopPreview(index);
                  }
                }}
              >
                <source src={track.file} type="audio/mpeg" />
                Your browser does not support audio playback.
              </audio>

              <p className="text-xs text-gray-400">
                Preview: maximum 30 seconds
              </p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 text-center border border-gray-700">
            <div className="text-4xl mb-4">🎵</div>

            <h2 className="text-2xl font-bold mb-3">
              Continue listening
            </h2>

            <p className="text-gray-300 mb-6">
              You have listened to the 30-second preview.
              Continue listening to the full song through the official
              AVG Muzik Ministry channels.
            </p>

            <div className="space-y-3">
              <a
                href={streamingLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition"
              >
                🎧 Listen on Spotify
              </a>

              <a
                href={streamingLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition"
              >
                ▶️ Watch on YouTube
              </a>

              <a
                href={streamingLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition"
              >
                Facebook
              </a>

              <a
                href={streamingLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition border border-gray-600"
              >
                TikTok
              </a>

              <a
                href={streamingLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition"
              >
                Instagram
              </a>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 text-gray-400 hover:text-white underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}