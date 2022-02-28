interface ButtonProps {
   link: String;
}

export default function Button(props: ButtonProps) {

   return (
      <a href="https://www.google.com">
         <div className="group px-6 py-3 bg-transparent hover:bg-sky-400 rounded-md outline outline-1 outline-sky-400 transition-all ease-in-out">
            <p className="pointer-events-none text-sky-400 group-hover:text-gray-100"> Register </p>
         </div>
      </a>
   );
}