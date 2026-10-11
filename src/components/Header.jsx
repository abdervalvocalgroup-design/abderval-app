import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import avgLogo from "../assets/AVG.jpg";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-black border-b border-gray-800">

      {/* Logo */}
      <Link to="/">
        <img
          src={avgLogo}
          alt="AVG Muzik Ministry"
          className="h-16 w-auto object-contain"
        />
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-purple-400 transition">
          {t("home")}
        </Link>

        <Link to="/links" className="hover:text-purple-400 transition">
          {t("links")}
        </Link>

        <Link to="/donate" className="hover:text-purple-400 transition">
          {t("support")}
        </Link>

        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-gray-800 text-white px-3 py-2 rounded-lg"
        >
          <option value="en">🇬🇧 English</option>
          <option value="pt">🇵🇹 Português</option>
          <option value="es">🇪🇸 Español</option>
          <option value="fr">🇫🇷 Français</option>
          <option value="ar">🇸🇦 العربية</option>
          <option value="sw">🇰🇪 Kiswahili</option>
          <option value="zh">🇨🇳 中文</option>
        </select>
      </div>

    </div>
  );
}