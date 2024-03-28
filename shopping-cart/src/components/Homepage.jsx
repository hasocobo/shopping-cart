import { useEffect, useState } from "react"
import Button from "./Button"
import { Link } from "react-router-dom"


export default function Homepage({ text }) {
  return (
    <div className="w-full flex h-full justify-center">
      <div className="mt-60 flex flex-col items-center ">
        <h1 className="letter-animation px-2 text-zinc-700 font-bold text-5xl flex justify-center align-center">
          {text}
        </h1>
        <div className="button-animation mt-12 text-xl font-semibold text-zinc-50 translate-y-12">
          <Link to={"/store"} className="discover-button rounded-[4px] border-red-600 border-2 text-zinc-700 hover:text-white duration-700 transition">
            Start Discovering
          </Link>
        </div>
      </div>
    </div>
  )
}