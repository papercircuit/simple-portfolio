import { useEffect } from "react";

const FaviconView = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    // Generate a random shape for the favicon
    ctx.beginPath();
    ctx.moveTo(Math.random() * 16, Math.random() * 16);
    for (let i = 0; i < 5; i++) {
      ctx.arc(
        Math.random() * 16,
        Math.random() * 16,
        Math.random() * 8,
        0,
        Math.PI * 2,
        false
      );
    }
    ctx.fillStyle = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 1)`;
    ctx.fill();
    
  }, []);

  return (
    <div>
        <h1>Favicon View</h1>
    </div>
  );
};

export default FaviconView;
