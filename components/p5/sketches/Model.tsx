import {P5Instance} from "react-p5-wrapper"
import Sketch from "../Sketch"

export default function Model(p5: P5Instance) {

   let modelObject;

   p5.setup = () => {
      modelObject = p5.loadModel("robotModel.obj");
      const canvas = p5.createCanvas(200,300,p5.WEBGL);
   }

   p5.draw = () => {
      p5.clear();
      p5.background('rgba(0,0,0,0)');
      // p5.lights();
      p5.translate(0,120,0)
      // p5.box();
      // p5.normalMaterial();
      p5.ambientLight(255);
      // p5.pointLight(0,255,255, 0, 100, 0);
      p5.ambientMaterial(0,100,200);

      p5.pointLight(255,255,255, p5.mouseX, p5.mouseY, 100);
      // p5.specularMaterial(250);
      p5.shininess(50);
      p5.scale(100);
      p5.angleMode(p5.DEGREES)
      p5.rotateY(p5.frameCount * 0.5);
      p5.rotateX(180);
      p5.noStroke();
      // p5.fill(0,100,200)
      p5.model(modelObject);
      // p5.torus(100,10)
   }


}