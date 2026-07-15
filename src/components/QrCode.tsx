"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function QrCode({ label }: { label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, currentUrl, {
        width: 140,
        margin: 1,
        color: { dark: "#f5f5f5", light: "#00000000" },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
      <canvas ref={canvasRef} className="rounded-md" />
      <p className="text-center text-xs text-neutral-500">{label}</p>
      {url && <p className="max-w-[180px] truncate text-center text-[11px] text-neutral-600">{url}</p>}
    </div>
  );
}
