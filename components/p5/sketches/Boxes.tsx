import { P5Instance } from "react-p5-wrapper";
import Sketch from "../Sketch";


interface Color {
   r: number; g: number; b: number;
}

class Box {
   x: number; y:number;
   vx: number; vy: number;
   rotation: number;
   color: Color;

   constructor(x: number, y: number, rotation: number, color: Color) {
      this.x = x;
      this.y = y;
      this.rotation = rotation;
      this.color = color;
   }

   applyTorque() {

   }

   applyLinearForce() {

   }

   update() {

   }

   render() {

   }
}

function Boxes(p5: P5Instance) {
      p5.setup = () => {
         p5.createCanvas(p5.windowWidth, p5.windowHeight/4);
      }

      p5.draw = () => {
      }
}

export default function BoxesSketch() {
   return <Sketch sketch={Boxes} />
}