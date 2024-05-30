import message from "../assets/message.png"
import bulb from "../assets/bulb.png"


const Forum = () => {
  return (
    <div>
      <h1 className="ml-12 mt-10 text-xs text-gray-400">Home/Forum</h1>
     <div className="text-center">
        <h1 className="text-base">FORUM</h1>
        <h1 className="text-3xl mt-3">Discuss and evolve</h1>
        <h1 className="text-zinc-500 mt-5">Engage with Fellow Professinals : Join the Programme Forum Discussion</h1>
        <div className="border border-black p-3 mt-5 w-5/12 ml-96 rounded-full">
            <input className="placeholder-slate-950" placeholder="Search Topics"/>
            <button className="bg-black rounded-full"><img/> </button>
        </div>
        <div className="flex">
        <div>
            <div className="flex  h-10 rounded-full p-2 ml-96 mt-10">
                <img src={message} className="w-6 h-6 ml-3 bg-pink-100 "/>
                <h1 >START DISCUSSING</h1>
            </div>
        </div>
        <div>
            <div className="flex  h-10 rounded-full p-2 ml-20 mt-10">
                <img src={bulb} className="w-6 h-6 ml-3bg-blue-200"/>
                <h1 className="ml-3">VIEW TOPICS</h1>
            </div>
        </div>
     </div>
    </div>
    <div/>
    </div>
  )
}

export default Forum
