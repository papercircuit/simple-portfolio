import React, { useRef, useEffect } from "react";
import p5 from "p5";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let x = 0;
      let y = 0;
      let z = 0;
      let gridSize = 10;

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.parent(canvasRef.current);
        p.colorMode(p.HSB);
      };

      p.draw = () => {
        p.background(0);

        const cameraX = p.map(p.mouseX, 0, p.width, -p.width / 2, p.width / 2);
        const cameraY = p.map(p.mouseY, 0, p.height, -p.height / 2, p.height / 2);
        p.camera(cameraX, cameraY, p.height / 2 / p.tan((p.PI * 30) / 180), cameraX, cameraY, 0, 0, 1, 0);

        p.noStroke();

        for (let i = -p.width/2; i <= p.width/2; i+= gridSize) {
          for (let j = -p.height/2; j <= p.height/2; j+= gridSize) {
            let distance = p.dist(p.mouseX, p.mouseY, i, j);
            let angle = p.map(distance, 0, p.width, 0, p.PI*2);
            let amplitude = p.map(distance, 0, p.width, 0, 100);

            let size = p.map(distance, 0, p.width, 2, 10);
            let hue = p.map(i, -p.width/2, p.width/2, 0, 360);
            let saturation = p.map(j, -p.height/2, p.height/2, 0, 100);

            let x = i + p.sin(angle) * amplitude;
            let y = j + p.cos(angle) * amplitude;
            let z = p.sin(p.frameCount/100 + angle) * amplitude / 2;

            p.push();
            p.translate(x, y, z);
            p.fill(hue, saturation, 100);
            p.sphere(size);
            p.pop();
          }
        }
      };
    };

    const p5Canvas = new p5(sketch);

    return () => {
      p5Canvas.remove();
    };
  }, []);

  return <div className="background" ref={canvasRef}></div>;
};

export default Background;
