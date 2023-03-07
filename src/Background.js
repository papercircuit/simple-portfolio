import React, { useRef, useEffect } from "react";
import p5 from "p5";

const Background = () => {
    // Create a reference to the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a new p5 instance
    const sketch = (p) => {
        // set xyz to 0 so that the grid starts at the center of the canvas
      let x = 0;
      let y = 0;
      let z = 0;
    //   set the size of the grid. Higher numbers will make bigger squares resulting in a more pixelated look and better performance
      let gridSize = 50;

      p.setup = () => {
        // Create a canvas that fills the browser window and attach it to the canvasRef
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.parent(canvasRef.current);
        p.colorMode(p.HSB);
      };

      p.draw = () => {
        // set the background color. The first number is the hue, the second is the saturation, and the third is the brightness
        p.background(10, 2, 8);

        

        // set the camera position. This map function takes in the mouse position and maps it to the center of the canvas using the width and height of the canvas. The last two arguments are the distance from the camera to the center of the canvas. 
        const cameraX = p.map(p.mouseX, 0, p.width, -p.width / 2, p.width / 2);
        const cameraY = p.map(
          p.mouseY,
          0,
          p.height,
          -p.height / 2,
          p.height / 2
        );

        // Set the camera position and rotation. We do this using the p5.js camera function. The first three arguments are the x, y, and z position of the camera. The next three arguments are the x, y, and z position of the center of the canvas. The last three arguments are the x, y, and z position of the up vector (in this case we are using the default up vector of (0, 1, 0) which means y is up).
        p.camera(
          cameraX,
          cameraY,
          p.height / 2 / p.tan((p.PI * 30) / 180),
          cameraX,
          cameraY,
          0,
          0,
          1,
          0
        );

        p.noStroke();

        // Loop through the grid and draw a shape at each point.  https://p5js.org/reference/#group-Shape
        for (let i = -p.width / 2; i <= p.width / 2; i += gridSize) {
          for (let j = -p.height / 2; j <= p.height / 2; j += gridSize) {
            let distance = p.dist(p.mouseX, p.mouseY, i, j);
            let angle = p.map(distance, 0, p.width, 0, p.PI * 2);
            let amplitude = p.map(distance, 0, p.width, 0, 100);

            // The size of the sphere is mapped to the distance from the mouse position to the current point in the grid. This makes the spheres closer to the mouse larger and the spheres further from the mouse smaller.
            let size = p.map(distance, 0, p.width, 2, 10);
            let hue = p.map(i, -p.width / 2, p.width / 2, 0, 360);
            let saturation = p.map(j, -p.height / 2, p.height / 2, 0, 100);

            // The x, y, and z position of the sphere is mapped to the angle and amplitude. This makes the spheres move in a circular motion.
            let x = i + p.sin(angle) * amplitude;
            let y = j + p.cos(angle) * amplitude;
            // This is where the z position is set. We are using the p.sin function to make the spheres move up and down. The p.frameCount / 100 is the speed of the animation. The higher the number, the faster the animation. The angle is the angle of the current point in the grid. The amplitude is the distance from the mouse position to the current point in the grid.
            let z = (p.sin(p.frameCount / 100 + angle) * amplitude) / 2;

            p.push();
            p.translate(x, y, z);
            p.fill(hue, saturation, 100);
            p.cone(size); // change this to p.box, p.cylinder, p.cone, etc. to get different shapes
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

  return (
    <div className="relative h-screen w-screen b">
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        ref={canvasRef}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center bg-slate-400 border-slate-500 p-8 rounded-lg bg-opacity-20">
        <h1 className="text-white text-4xl font-bold">P5 Background</h1>
        <p className="text-white text-lg mt-4">
          Move your mouse around to see the effect. This was made with P5.js. and chatGPT. Feel free to use it in your own projects.
        </p>
      </div>
    </div>
  );
};

export default Background;
