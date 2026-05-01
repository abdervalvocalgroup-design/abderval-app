import { streamingLinks } from "../data/musicData";

export default function Links() {
  return (
    <div className="p-6 space-y-4">
      <a href={streamingLinks.spotify} target="_blank" rel="noreferrer">
        Spotify
      </a>

      <a href={streamingLinks.youtube} target="_blank" rel="noreferrer">
        YouTube
      </a>

      <a href={streamingLinks.facebook} target="_blank" rel="noreferrer">
        Facebook
      </a>

      <a href={streamingLinks.tiktok} target="_blank" rel="noreferrer">
        TikTok
      </a>

      <a href={streamingLinks.instagram} target="_blank" rel="noreferrer">
        Instagram
      </a>
    </div>
  );
}
