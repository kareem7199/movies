import React from 'react'
import { Markup } from 'interweave';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function MovieContainer(props) {
    return (
        <div className='w-[90vw] my-4 mx-auto bg-pink p-10 md:w-[40vw] flex flex-col justify-center text-center rounded-xl' >
                <img className='w-full object-cover h-96 object-top hover:object-bottom transition-all duration-700 rounded-xl'  src={props.photo} alt="" />
                <h2 className='my-5 text-4xl font-bold text-white'>{props.movie_name}</h2>
                <p className='my-1 text-white text-xl'>Rating: {props.rating} </p>
                <p className='my-1 text-white text-xl'>Language : {props.language}</p>
                <p className='my-1 text-white text-xl'>Genres: {props.genres.join(",")}</p>
                <p className='my-1 text-white text-xl'>Premiered: {props.premiered}</p>
            <Markup className='text-white text-xl mt-5' content={props.summary} />
        </div>
    )
}
