import React, { useContext } from 'react';
import { ResultCard } from './ResultCard';
import { GlobalContext } from '../context/GlobalState';

export const Watched: React.FC = () =>{
    const { watched } = useContext(GlobalContext);
    return (
        <div className="container m-auto justify-center" >
            <div className="flex w-full py-10">
                {
                    watched.length > 0 && (
                        <div className="flex flex-wrap w-full mx-1 justify-start" >
                            {
                                watched.map((movie) => (
                                    <ResultCard key={movie.id} movie={movie} type="watched" />
                                ))
                            }

                        </div>
                    )
                }
            </div>
        </div>
    )
};
