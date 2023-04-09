import { useEffect } from "react";

const Favicon = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
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

    // Set the favicon link tag in the head of the document
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = canvas.toDataURL();

  }, []);

  return 
};

export default Favicon;
