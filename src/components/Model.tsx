import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import m5 from "../assets/m5.png"
import m6 from "../assets/m6.png"
import m7 from "../assets/m7.png"
import m8 from "../assets/m8.png"


const Model = () => {
  return (
    <div className="flex p-3">
      <div className="bg-orange-200 rounded-full w-32 h-32 ml-20 mt-20">
        <img src={m1}/>
      </div>
      <div className="bg-blue-200 rounded-full w-32 h-32 mt-10">
        <img src={m2}/>
      </div>
      <div className="bg-violet-200 rounded-full w-32 h-32 ml-20">
        <img src={m3}/>
      </div>
      <div className="bg-yellow-200 rounded-full w-32 h-32 mt-20">
        <img src={m4}/>
      </div>
      <div className="bg-purple-200 rounded-full w-32 h-32 ml-20">
        <img src={m5}/>
      </div>
      <div className="bg-orange-400 rounded-full w-32 h-32 mt-20">
        <img src={m6}/>
      </div>
      <div className="bg-green-200 rounded-full w-32 h-32">
        <img src={m7}/>
      </div>
      <div className="bg-blue-400 rounded-full w-32 h-32 mt-20">
        <img src={m8}/>
      </div>
    </div>
  )
}

export default Model
