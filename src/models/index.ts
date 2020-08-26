import { AriaAttributes } from "react"

export type SearchedMovieResponse = {
    results : SearchedResults[];
}

export type SearchedResults = {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
}

export type Movie = {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
}