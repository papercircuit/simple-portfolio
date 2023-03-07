import React, { useEffect } from "react";

const Favicon = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");

    // Generate a random pattern for the favicon
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        ctx.fillStyle = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, 1)`;
        ctx.fillRect(i, j, 1, 1);
      }
    }

    // Set the favicon link tag in the head of the document
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = canvas.toDataURL();
  }, []);

  return null;
};

export default Favicon;
