import logo from "../assets/logo.png"
import search from "../assets/search.png"


const Navbar = () => {
  return (
    <div className="flex border-b-2 p-1">
      <img src={logo} className="ml-14 mt-5 h-14"/>
      <h1 className="ml-96 mt-5">Learn </h1>
      <h1 className="mt-5 ml-5">How do you participates?</h1>
      <h1 className="mt-5 ml-5">Universities</h1>
      <h1 className="mt-5 ml-5">Corporate</h1>
      <img src={search} className="w-60 ml-20 h-14 mt-4"/>
    </div>
  )
}

export default Navbar
