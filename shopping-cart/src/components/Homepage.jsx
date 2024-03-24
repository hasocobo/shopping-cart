import { useEffect, useState } from "react"
import Button from "./Button"
import { Link } from "react-router-dom"


export default function Homepage({ text }) {
  return (
    <div className="w-full flex h-full justify-center">
      <div className="mt-60 mr-10 flex flex-col items-center ">
        <h1 className="letter-animation text-zinc-700 font-bold text-5xl">
          {text}
        </h1>
        <div className="button-animation mt-12 text-xl font-semibold text-zinc-50 translate-y-12">
          <Link to={"/store"} className="p-4 rounded-[4px] border-red-600 border-2 text-zinc-700 hover:text-white duration-700 transition hover:bg-red-600">
            Start Discovering
          </Link>
        </div>
      </div>
    </div>
  )
}