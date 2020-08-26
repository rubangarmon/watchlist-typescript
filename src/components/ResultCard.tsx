import React from 'react';
import { Movie } from '../models';
import { MovieControls } from './MovieControls';
import moment from 'moment';

interface Props {
    movie: Movie
}

export const ResultCard: React.FC<Props> = ({ movie }) => {

    const MAX_WORD = 38;
    return (
        <div className="card flex flex-col mx-4 my-6 w-48">
            <div className="card-inner overflow-hidden rounded-lg shadow-md relative">
                <div className="overlay overflow-hidden"></div>
                <div className="poster-wrapper overflow-hidden">
                    {
                        movie.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={`${movie.title} Poster`}
                            />

                        ) : (<div className="filler-poster w-full bg-gray-200" style={{ height: "17.5rem" }}></div>)
                    }
                </div>
                <div className="relative">
                    <MovieControls />
                </div>
                <div className="info flex flex-col text-base py-4 px-3"  >
                    <div className="header leading-tight font-bold">
                        <h3>
                            {
                                movie.title.length > MAX_WORD
                                    ? `${movie.title.substring(0, MAX_WORD)}...`
                                    : movie.title
                            }
                        </h3>
                    </div>
                    <div className="details text-sm pt-1">
                        <p className="release-date">
                            {moment(movie.release_date).format('MMM Do YYYY')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
