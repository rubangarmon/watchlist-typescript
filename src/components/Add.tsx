import React, { useState, useEffect } from 'react';
import * as Models from '../models';
import { get } from '../utils/Http';
import { ResultCard } from './ResultCard';
import '../css/site.css'


interface SearchedMovieResponse {
    results: Models.SearchedMovieResponse
}

export const Add: React.FC = () => {

    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<Array<Models.SearchedResults>>([]);



    useEffect(() => {
        console.dir('caraaaa')
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=true&query=the%20lo`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([]);
                }
            });

    }, [])

    //TODO: TRY TO IMPLEMENT AN INTERFACE ON API RESPONSE 
    const onChange = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuery(e.currentTarget.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1db5b0c0aaf59ca517d80accc1874e64&language=en-US&page=1&include_adult=true&query=${e.currentTarget.value}`)
            .then(res => res.json())
            .then(data => {
                console.dir(data.results)
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([]);
                }
            });
    }

    console.dir(results);
    return (

        <div className="container m-auto justify-center">
            <div className="add-content flex w-full py-10">
                <div className="input-wrapper flex justify-center w-full">
                    <input className="shadow appearance-none border rounded w-64 py-2 px-3 border-gray-600"
                        type="text"
                        value={query}
                        onChange={onChange}
                        placeholder="Search for a movie"
                    />
                </div>
            </div>
            {
                results.length > 0 && (
                    <div className="flex flex-wrap w-full mx-1 justify-between">
                        {
                            results.map((movie) => (
                                <ResultCard key={movie.id} movie={movie} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
