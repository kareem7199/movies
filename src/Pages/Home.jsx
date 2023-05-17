import React from 'react'
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows').then(res => {
      // console.log(res.data);
      setMovies(res.data);
      setSearch(res.data);
      setLoading(false);
    });
  }, []);

  const handleSearch = (e) => {
    const data = search.filter((el) => el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1 || el.genres.join("").toLowerCase().indexOf(e.target.value.toLowerCase()) != -1);
    setMovies(data);
  }

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <Navbar />
        {!loading &&(
                  <div className='bg-purple'>
                  <div className='w-[90vw] m-auto md:w-[70vw]'>
                    <div class="relative my-10   md:block">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-pink" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Search icon</span>
                      </div>
                      <input onChange={handleSearch} type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-pink border border-pink rounded-lg bg-pink focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <div className='flex flex-wrap justify-center'>
                      {movies.map((movies) =>
                        <>
                          <Card genres={movies.genres} image_url={movies.image.original} name={movies.name} language={movies.language} route={movies.id} />
                        </>
                      )}
                    </div>
                  </div>
                </div>
        )
        }
      </div>
      {
        loading && (
          <div class="text-center">
            <div role="status">
              <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-fushia fill-purple" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>
          </div>
        )
      }
      <Navbar />
    </div>
  )
}
