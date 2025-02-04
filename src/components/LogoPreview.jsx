import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import React, { useEffect, useState, useContext } from "react";

const LogoPreview = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState(null);
  const { updateStorage } = useContext(UpdateStorageContext);

  const BASE_URL = "https://logoexpress.tubeguruji.com";

  useEffect(() => {
    const storageData = localStorage.getItem("value");
    if (storageData) {
      setStorageValue(JSON.parse(storageData));
    }
  }, [updateStorage]); // Ensures re-render when storage updates

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    if (!downloadLogoDiv) return;

    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
      scale: window.devicePixelRatio * 2,
      useCORS: true,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "logo.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    return LucidIcon ? (
      <LucidIcon color={color} size={size} style={{ transform: `rotate(${rotate}deg)` }} />
    ) : null;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.bgPadding || "0px" }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded || "0px",
            background: storageValue?.bgColor || "#ffffff",
          }}
        >
          {storageValue?.icon ? (
            storageValue.icon.includes(".png") ? (
              <img
                src={`${BASE_URL}/png/${storageValue.icon}`}
                style={{
                  height: storageValue?.iconSize || "100px",
                  width: storageValue?.iconSize || "100px",
                }}
                alt="Logo"
              />
            ) : (
              <Icon
                name={storageValue.icon}
                color={storageValue?.iconColor || "#000"}
                size={storageValue?.iconSize || 100}
                rotate={storageValue?.iconRotate || 0}
              />
            )
          ) : (
            <p className="text-gray-500">No icon selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
