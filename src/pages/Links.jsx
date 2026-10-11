import { streamingLinks } from "../data/musicData";
import { useTranslation } from "react-i18next";

export default function Links() {
  const { t } = useTranslation();

  const links = [
    {
      name: "Spotify",
      icon: "🎵",
      url: streamingLinks.spotify,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      name: "YouTube",
      icon: "▶️",
      url: streamingLinks.youtube,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "Facebook",
      icon: "📘",
      url: streamingLinks.facebook,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "TikTok",
      icon: "🎬",
      url: streamingLinks.tiktok,
      color: "bg-gray-700 hover:bg-gray-800",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: streamingLinks.instagram,
      color: "bg-pink-600 hover:bg-pink-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-4">
          🔗 {t("follow_us")}
        </h1>

        <p className="text-center text-gray-300 mb-10">
          {t("mission")}
        </p>

        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex justify-between items-center p-5 rounded-xl transition ${link.color}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  {link.icon}
                </span>

                <span className="text-xl font-semibold">
                  {link.name}
                </span>
              </div>

              <span className="font-bold">
                {t("open")} →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            🌍 AVG Muzik Ministry
          </h2>

          <p className="text-gray-300">
            {t("mission")}
          </p>
        </div>

      </div>
    </div>
  );
}