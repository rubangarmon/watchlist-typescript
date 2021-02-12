import React, { useContext } from 'react';
import { ResultCard } from './ResultCard';
import { GlobalContext } from '../context/GlobalState'

export const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    return (
        <div className="container m-auto justify-center">
            <div className="add-content flex w-full py-10">
                {
                    watchlist.length > 0 && (
                        <div className="flex flex-wrap w-full mx-1 justify-start">
                            {
                                watchlist.map((movie) => (
                                    <ResultCard key={movie.id} movie={movie} type="watchlist" />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
