import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Movie } from '../models';

interface Props {
    movie: Movie,
    type?: string
}

export const MovieControls: React.FC<Props> = ({ movie, type = "default" }) => {
    const { dispatch } = useContext(GlobalContext);
    console.dir(movie)
    let controls = {
        icons: ["fa-eye", "fa-list"],
        actions: [{
            type: "ADD_MOVIE_TO_WATCHLIST",
            payload: movie
        }, {
            type: "ADD_MOVIE_TO_WATCHED",
            payload: movie
        }
        ]
    };
    if (type == "watchlist") {
        controls = {
            icons: ["fa-eye", "fa-times" ],
            actions: [{
                type: "ADD_MOVIE_TO_WATCHED",
                payload: movie
            }, {
                type: "REMOVE_MOVIE_FROM_WATCHLIST",
                payload: movie
            }]
        }
    } else if(type == "watched") {
        controls = {
            icons: ["fa-list", "fa-times" ],
            actions: [{
                type: "ADD_MOVIE_TO_WATCHLIST",
                payload: movie
            }, {
                type: "REMOVE_TO_WATCHED",
                payload: movie
            }]
        }
    }

    return (
        <div className="card-controls text-gray-300">
            <div className="inner-controls">
                <button className="btn-ctrl" onClick={() => dispatch(controls.actions[0])} >
                    <i className={`fa-fw fa ${controls.icons[0]}`}></i>
                </button>
                <button className="btn-ctrl" onClick={() => dispatch(controls.actions[1])}>
                    <i className={`fa-fw fa ${controls.icons[1]}`}></i>
                </button>
            </div>
        </div>
    )
}
