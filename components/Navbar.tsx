/* eslint-disable */

import React, {useState, useEffect} from "react"
import Button from "./RegisterButton";


export default function Navbar(props) {

   const defaultBackground = 'bg-black/60';

   let backdropBlur: String = "backdrop-blur-md";
   if(props.blur) {
      if(props.blur === 'lg') backdropBlur = "backdrop-blur-lg";
      if(props.blur === 'md') backdropBlur = "backdrop-blur-md";
      if(props.blur === 'sm') backdropBlur = "backdrop-blur-sm";
      if(props.blur === 'xl') backdropBlur = "backdrop-blur-xl";
      if(props.blur === '2xl') backdropBlur = "backdrop-blur-2xl";
      if(props.blur === '3xl') backdropBlur = "backdrop-blur-3xl";
   }  
   // let backdropBlur = `backdrop-blur-${defaultBlurSize}`;

   // console.log(backdropBlur);

   return <>
      {/* <div className={`fixed flex justify-between top-0 left-0 w-full h-20 ${ props.background ?  props.background : defaultBackground} backdrop-blur-${props.blur ? props.blur : defaultBlurSize} z-50`}> */}
      <div className={`fixed flex justify-between top-0 left-0 w-full h-20 ${ props.background ?  props.background : defaultBackground}  ${backdropBlur} z-50`}>
         <div className="flex flex-column gap-5">
            {/* Logo */}
         </div>

         <div className="flex flex-column gap-10 mx-12 md:mx-28 my-auto">
            {props.links && props.links.map((element) => {
               return <h1 className="text-xl text-white"> {element} </h1>
            })}
            
            <Button link={""} />
         </div>
      </div>
   </>
}