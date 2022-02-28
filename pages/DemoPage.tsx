import Navbar from "../components/Navbar";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaBeer } from 'react-icons/fa';
import Sketch from "../components/p5/Sketch"

// P5 Sketches
import Snowfall from "../components/p5/sketches/Snowfall"


import 'react-vertical-timeline-component/style.min.css';


export default function Page() {
   return <>
      <div className="fixed bg-black top-0 left-0 -z-10">
         <Sketch sketch={Snowfall} />
      </div>
      <Navbar background="bg-gray-700/10" blur='2xl' links={[]} />

      <div className="py-24 bg-transparent z-50">

         <div className="flex flex-col items-center gap-10" >

            <div id="title" className="flex flex-col items-center gap-2">
               <h1 className="text-9xl font-bold text-gray-100"> SEIGE </h1>
               <p className="text-xl text-gray-600"> A small punch line </p>
            </div>
            <p className=" text-justify text-white text-xl font-sans">
                Seige is the Summer Technical Fest organised by the IEEE MUJ student Chapter at Manipal University Jaipur
            </p>

         </div>

         <div className=" p-10 w-full">
         <VerticalTimeline
            lineColor="black">
            <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
               date="2011 - present"
               iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               icon={<FaBeer />}
            >
               <h3 className="vertical-timeline-element-title">Creative Director</h3>
               <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
               <p>
                 Creative Direction, User Experience, Visual Design, Project Management, Team Leading
               </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
               date="13/03/2022"
               iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
               icon={<FaBeer />}
            >

            </VerticalTimelineElement>
         </VerticalTimeline>

         </div>
      </div>
   </>
}