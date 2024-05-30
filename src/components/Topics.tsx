import topic1 from "../assets/topic1.png"
import topic2 from "../assets/topic2.png"
import message from "../assets/message.png"


const Topics = () => {
  return (
    <div className="text-center bg-yellow-50 h-11/12 p-2">
      <h1 className="text-xs pt-20">TOPICS</h1>
      <h1 className="text-xl ">Most Searched Ones</h1>
      <div className="flex ml-32 mt-5">
        <div className="bg-purple-950 text-center w-60 h-32 ml-24 pt-12">
          <h1 className="text-white text-lg">Elibility</h1>
        </div>
        <div className="bg-black text-center w-60 h-32 ml-8 pt-12">
          <h1 className="text-white text-lg">F1 Visa Students</h1>
        </div>
        <div className="bg-black text-center w-60 h-32 ml-8 pt-12">
          <h1 className="text-white text-lg">Universities</h1>
        </div>
      </div>
      <div className="flex ml-32 mt-5">
      <div className="bg-black text-center w-60 h-32 ml-24 pt-12">
          <h1 className="text-white text-lg">Admission</h1>
        </div>
        <div className="bg-black text-center w-60 h-32 ml-8 pt-12">
          <h1 className="text-white text-lg">Company</h1>
        </div>
        <div className="bg-black text-center w-60 h-32 ml-8 pt-12">
          <h1 className="text-white text-lg">Jobs</h1>
        </div>
      </div>
      <div className="flex ml-96 mt-10">
      <h1 className="text-xs ml-32">Didn't find your topic?</h1>
      <img src={message} className="w-3 h-3 mt-1 ml-3"/>
      <h1 className="text-xs ml-3">Start discussings</h1>
      </div>
    </div>
  )
}

export default Topics
