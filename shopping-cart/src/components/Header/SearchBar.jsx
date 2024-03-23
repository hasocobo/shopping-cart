import Icon from "../Icon"

export default function SearchBar() {
  return (
    <div className="relative flex">
      <input type="text" className="border-2 rounded-lg w-60 h-8 px-2 hover:border-red-400 transition duration-300" placeholder="Search"/>
      <div className="absolute top-1 left-52">
        <Icon name={"search"}/>
      </div>
    </div>
  )
}