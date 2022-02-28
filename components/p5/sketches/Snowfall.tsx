import { P5Instance } from "react-p5-wrapper";

const GENERATOR_INTERVAL = 400;
const GENERATOR_DIST = 60;
const GENERATOR_MAX_SIZE = 4;
const MOUSE_RADIUS = 80;
const MOUSE_PUSH_FORCE_MAG = 0.02;

const GENERATOR_OFFSET = 100;

const VXMAGSTART = -1.5;
const VXMAGEND = 1.5;
const VYMAGSTART = 1; 
const VYMAGEND = 3;

class Generator {
   x: number;
   y: number;

   p5: P5Instance;
   updated: boolean = false;

   flakes: (Flake)[] = [];

   constructor(x: number, y: number, p5: P5Instance) {
      this.x = x;
      this.y = y;
      this.p5 = p5;

      setInterval(() => {
         // console.log(this.updated)
         // if(p5.focused || this.updated) {
            // const vyMag = 3, vxMag = 2;
            const vxMag = VXMAGEND - VXMAGSTART;
            const vyMag = VYMAGEND - VYMAGSTART;
            
            // const vx = -(vxMag/2) + (Math.random() * vxMag);
            let vx = VXMAGSTART + (Math.random()*vxMag)
            const vy =  VYMAGSTART + (Math.random()*vyMag);
            
            if(this.flakes.length < GENERATOR_MAX_SIZE) {
               let flake = new Flake(this.x, this.y, vx, vy);
               this.flakes.push(flake);
            }
      }, GENERATOR_INTERVAL);
      
   }

   applyForces() {
      for(let i = 0; i < this.flakes.length; i++) {
         let distX = this.flakes[i].x - this.p5.mouseX;
         let distY = this.flakes[i].y - this.p5.mouseY;
      
         let dist = Math.sqrt(Math.pow(distX,2) + Math.pow(distY,2) );

         if(dist < MOUSE_RADIUS) {
            let fx = MOUSE_PUSH_FORCE_MAG * (distX / dist);
            let fy = MOUSE_PUSH_FORCE_MAG * 0.7 * (distY / dist);

            this.flakes[i].applyForce(fx,fy < 0 ? 0 : fy);
         }
      }
   }

   isOutOfBounds(flake: Flake) {
      return flake.x < 0 || flake.x > this.p5.width || flake.y < this.y || flake.y > this.p5.height; 
   }

   update() {
      for(let i = 0; i < this.flakes.length; i++) {
         this.flakes[i].update();
         if(this.isOutOfBounds(this.flakes[i])) {
            // delete the flake
            this.flakes.splice(i, 1);
            i--;
         }
      }
      this.updated = true;
   }

   render() {
      for(let i = 0; i < this.flakes.length; i++)
         this.flakes[i].render(this.p5);
   }
}










class Flake {
   private static radius: number = 10;

   x: number; y: number;
   vx: number; vy: number;
   push: boolean;

   constructor(x: number, y: number, vx: number = 0, vy:number = 0) {
      this.x = x;
      this.y = y;

      this.vx = vx;
      this.vy = vy;
      this.push = false;
   }

   getAlpha(height: number, max: number = 100) {
      return max*(1 - (this.y / height));
   }

   applyForce(fx: number, fy: number) {
      this.vx += fx;
      this.vy += fy;

      this.push = true;
   }

   update() {
      this.x += this.vx;
      this.y += this.vy;
   }

   render(p5: P5Instance) {
      p5.fill(255, this.getAlpha(p5.height));
      p5.stroke(0);
      if(this.push) {
         p5.fill(255,0);
         p5.stroke(255, this.getAlpha(p5.height, 255));
         p5.strokeWeight(2);
         this.push = false;
      }
      p5.ellipse(this.x, this.y, Flake.radius, Flake.radius);
   }
}






export default function Snowfall (p5: P5Instance) {
   
   let flakeGenerators: (Generator)[] = [];
   const addGenerator = (x: number, p5: P5Instance) => {
      let generator: Generator = new Generator(x, 50, p5);
      flakeGenerators.push(generator);
   }

   p5.setup =  () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);

      for(let i = 0; i < p5.width; i += GENERATOR_DIST) {
         addGenerator(i, p5);
      }
   }
   
   p5.draw  = () => {
      p5.clear();
      p5.background(255, 0);

      flakeGenerators.forEach((generator) => {
         generator.applyForces();
         generator.update();
         generator.render();
      })

   }



   p5.windowResized = () => {
      const increased = p5.width < p5.windowWidth; 
      console.log(p5.width);
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      
      if(increased) {
         for(let i = (flakeGenerators.length + 1) * GENERATOR_DIST; i < p5.width; i += GENERATOR_DIST) {
            addGenerator(i, p5);
         }
      }
      
      // decrease generators
      else {
         for(let i = 0; i < flakeGenerators.length; i++) {
            if(flakeGenerators[i].x > p5.width) {
               flakeGenerators.splice(i, 1);
               i--;
            }
         }
      }
   }

}