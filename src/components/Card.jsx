import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div className="w-96 bg-pink shadow-xl mx-5 mb-10 rounded-md">
      <img className='object-cover w-full h-72 rounded-t-md' src={props.image_url} alt="" />
      <div className='flex items-center flex-col'>
        <h2 className="my-4 text-lg font-bold text-white">{props.name}</h2>
        <p className="my-4 text-lg font-bold text-white">{props.language}</p>
        <div className='my-5'>
          {
            props.genres.map((el) => {
              return <p className='bg-fushia p-2 rounded-lg inline text-white mx-2'>{el}</p>
            })
          }
        </div>
      </div>
      <Link className="w-full h-10 bg-fushia flex justify-center items-center  rounded-b-md  text-lg font-bold text-white hover:bg-purple" to={`/${props.route}`}>Watch</Link>
    </div>
  )
}
