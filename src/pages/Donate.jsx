import React from "react";
import { useTranslation } from "react-i18next";

import mpesaLogo from "../assets/payments/mpesa.png";
import emolaLogo from "../assets/payments/emola.png";
import paypalLogo from "../assets/payments/paypal.png";
import binanceLogo from "../assets/payments/binance.png";
import usdtQR from "../assets/payments/usdt-qr.png";
import avgLogo from "../assets/avg-logo.png";

export default function Donate() {
  const { t } = useTranslation();

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  return (
    <div className="p-6 text-white min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-center">
          🎼 {t("donate_title")}
        </h1>

        <p className="text-lg mb-8 text-center text-gray-300">
          {t("donate_message")}
        </p>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          ✨ {t("become_partner")}
        </h2>

        {/* MOBILE MONEY */}
        <div className="bg-gray-800 p-6 rounded-xl mb-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={mpesaLogo}
              alt="M-Pesa"
              className="w-16 h-16 object-contain"
            />

            <img
              src={emolaLogo}
              alt="e-Mola"
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-2xl font-bold">
              📱 {t("mobile_money")}
            </h3>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <p className="flex-1">
              <strong>M-Pesa:</strong> 848015111 (Adão José)
            </p>

            <button
              onClick={() => copyText("848015111")}
              className="bg-green-600 px-3 py-2 rounded hover:bg-green-700"
            >
              Copy
            </button>
          </div>

          <div className="flex items-center gap-3">
            <p className="flex-1">
              <strong>e-Mola:</strong> 868015111 (Adão José)
            </p>

            <button
              onClick={() => copyText("868015111")}
              className="bg-green-600 px-3 py-2 rounded hover:bg-green-700"
            >
              Copy
            </button>
          </div>
        </div>

        {/* INTERNATIONAL */}
        <div className="bg-gray-800 p-6 rounded-xl mb-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={paypalLogo}
              alt="PayPal"
              className="w-20 object-contain"
            />

            <h3 className="text-2xl font-bold">
              💵 {t("international_payments")}
            </h3>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <p className="flex-1">
              <strong>PayPal:</strong> adazeva@gmail.com
            </p>

            <button
              onClick={() => copyText("adazeva@gmail.com")}
              className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-700"
            >
              Copy
            </button>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <p className="flex-1">
              <strong>Airtm Username:</strong> adavito
            </p>

            <button
              onClick={() => copyText("adavito")}
              className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-700"
            >
              Copy
            </button>
          </div>

          <p>
            <strong>Airtm Email:</strong> adazeva@gmail.com
          </p>
        </div>

        {/* CRYPTO */}
        <div className="bg-gray-800 p-6 rounded-xl mb-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={binanceLogo}
              alt="Binance"
              className="w-20 object-contain"
            />

            <h3 className="text-2xl font-bold">
              🪙 {t("crypto_payments")}
            </h3>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <p className="flex-1">
              <strong>Binance ID:</strong> 1098595692
            </p>

            <button
              onClick={() => copyText("1098595692")}
              className="bg-green-600 px-3 py-2 rounded hover:bg-green-700"
            >
              Copy
            </button>
          </div>

          <p className="mb-3">
            <strong>USDT (TRC20):</strong>
          </p>

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-black p-3 rounded break-all flex-1">
              TP9pWG4EDnt3rzG5chXJU5tDCsV3JUxCnR
            </div>

            <button
              onClick={() =>
                copyText("TP9pWG4EDnt3rzG5chXJU5tDCsV3JUxCnR")
              }
              className="bg-green-600 px-3 py-2 rounded hover:bg-green-700"
            >
              Copy
            </button>
          </div>

          <div className="text-center">
            <img
              src={usdtQR}
              alt="USDT QR Code"
              className="w-44 mx-auto rounded-lg bg-white p-2"
            />

            <p className="text-sm mt-3 text-gray-300">
              Scan to send USDT (TRC20)
            </p>
          </div>
        </div>

        {/* BANK */}
        <div className="bg-gray-800 p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold mb-5">
            🏦 {t("bank_transfer")} (Millennium BIM)
          </h3>

          <p><strong>Account Holder:</strong> ADAO ZACARIAS JOSE</p>
          <p><strong>Account Number:</strong> 277624574</p>
          <p><strong>NIB:</strong> 000100000027762457457</p>
          <p><strong>IBAN:</strong> MZ59000100000027762457457</p>
          <p><strong>SWIFT Code:</strong> BIMOMZMXXXX</p>
        </div>

        {/* THANK YOU */}
<div className="bg-gradient-to-r from-teal-900 via-green-900 to-teal-900 p-8 rounded-2xl mt-8 text-center shadow-2xl border border-teal-500">

  <img
    src={avgLogo}
    alt="AVG Muzik Ministry"
    className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
  />

  <h3 className="text-2xl font-bold mb-3 text-white">
    AVG Muzik Ministry
  </h3>

  <p className="text-lg text-gray-100 leading-relaxed">
    {t("thank_you")}
  </p>

</div>
      </div>
    </div>
  );
}