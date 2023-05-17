import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Errorpage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h3 className="text-white text-5xl md:text-7xl font-bold fo">Mov<span className="text-fushia ">ie</span>s</h3>
      <h3 className="text-white text-6xl font-bold my-2">4<span className="text-fushia ">0</span>4</h3>
      <p className='text-white text-xl md:text-2xl mb-10'>Sorry, Page you looking for is not found 😔</p>
      <Link className='bg-fushia  px-6 md:px-10 py-3 text-white text-xl rounded-lg hover:bg-pink' to="/">GO TO HOMEPAGE</Link>
    </div>
  )
}
