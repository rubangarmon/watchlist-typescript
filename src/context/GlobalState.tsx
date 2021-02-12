import React, { useEffect, createContext, useReducer, ReactNode, useContext, Context, Dispatch } from 'react';
import AppReducer from '../context/AppReducer'; 
import { Movie } from '../models';

interface GlobalContextInterface {
    watchlist: Movie[];
    watched: Movie[];
    dispatch: React.Dispatch<any>;
}

//Initial State
/// TODO Check Non-null assertion operator !!
// https://stackoverflow.com/questions/46915002/argument-of-type-string-null-is-not-assignable-to-parameter-of-type-string/53725236#53725236
const initialState = {
    watchlist: localStorage.getItem('watchlistTs')
        ? JSON.parse(localStorage.getItem('watchlistTs')!)
        : [],
    watched: localStorage.getItem('watchedTs')
        ? JSON.parse(localStorage.getItem('watchedTs')!)
        : []
};

//create context
export const GlobalContext: Context<GlobalContextInterface> = createContext(
    {} as GlobalContextInterface
)

// const useGlobalContext = useContext(GlobalContext);

export type Props = {
    children: ReactNode
}

//provider components
const GlobalProvider = (props: Props ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlistTs', JSON.stringify(state.watchlist));
        localStorage.setItem('watchedTs', JSON.stringify(state.watched));
    }, [state]);

    // const addMovieToWatchlist = (movie: Movie) => {
    //     dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    // }

    const value: GlobalContextInterface = {
        watchlist: state.watchlist,
        watched: state.watched,
        dispatch
    }

    return(
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );

};

export { GlobalProvider }