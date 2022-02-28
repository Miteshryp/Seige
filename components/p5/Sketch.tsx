import dynamic from "next/dynamic"
import { P5WrapperProps } from "react-p5-wrapper";

const ReactP5Wrapper = dynamic(async () => {
   const module = await import('react-p5-wrapper');
   return module.ReactP5Wrapper;
}, {ssr: false});

export default function Sketch(props: P5WrapperProps) {
   return <ReactP5Wrapper sketch={props.sketch} />
}