import Carousel from "react-multi-carousel";
import React from "react";

export function CarouselHeading(props) {
  return (
    <h1
      className={`text-white text-left text-xl md:text-3xl font-orbitron font-extrabold md:font-bold ${props.className}`}
    >
      {props.children}
    </h1>
  );
}

export function CarouselContent(props) {
  return (
    <div
      className={`text-white text-left ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export function CarouselCard(props) {
  return (
   //  <div className="p-4 flex flex-col w-full shrink-0 mx-auto gap-3 shadow-sm backdrop-blur-3xl shadow-gray-300/40 bg-gray-100/80 rounded-lg " >
   <div className="p-6 flex flex-col gap-3 w-full bg-slate-500/40 rounded-xl hover:bg-sky-500 transition-all duration-300 ease-in-out">
      {props.children}
    </div>
  );
}

export default function CustomCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      className="flex px-0 md:px-10 py-10 backdrop-blur-sm"
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      autoPlay={false}
      keyBoardControl={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={
        props.deviceType
        // window.innerWidth < 480
        //   ? "mobile"
        //   : window.innerWidth < 1080
        //   ? "tablet"
        //   : "desktop"
      }
    >
      {props.eventData.map((event, index) => {
         console.log(window.innerWidth)
        const maxLength = window.innerWidth < 300 ? 50 : (window.innerWidth < 400 ? 100 : 200);
        //trim the string to the maximum length
        var trimmedString = event.description.substr(0, maxLength);

        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(
          0,
          Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
        ) + "...";

        return (
          <div className="flex px-2 justify-self-center w-full h-full">
            <CarouselCard>
              <CarouselHeading>{event.name}</CarouselHeading>
              <CarouselContent>
                <p>{trimmedString}</p>
              </CarouselContent>
            </CarouselCard>
          </div>
        );
      })}

      {props.children}
    </Carousel>
  );
}
