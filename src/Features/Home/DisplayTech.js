import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const DisplayTech = () => {
  return (
    <div className="space-y-8 mb-5">
      <div className=" mx-auto text-center">
        < h1 className="text-orange-600 text-[30px] font-bold" > Technology i use</h1 >
        <p className="font-light text-slate-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, placeat? lorem</p>
      </div >
      <div className="grid grid-cols-4 max-sm:grid-cols-1 place-items-center space-y-6">
        <DiMongodb size={110} color="green" className="animate-pulse" />
        <SiExpress size={110} color="blue" />
        <DiReact size={110} color="blue" className="hover:animate-spin" />
        <FaNodeJs size={110} color="green" className=" animate-pulse " />
      </div>
    </div >
  )
}

export default DisplayTech