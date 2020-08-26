import React from 'react'
import './Movie.css'

export interface Movie {
    title: string;
    releaseDate: any;
    overview: string;
    posterPath: string;
    status: string;
    runtime: number;
    budget: number;
    revenue: number;
}

export function Movie({ title, releaseDate, overview, posterPath, status, 
                        runtime, budget, revenue }: Movie) {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div className="movieDetails">
            <img className="poster" src={`${IMAGE_BASE_URL}${posterPath}`}></img>
            <div className="content">
                <h2>{title}</h2>
                <p>{releaseDate}</p>
                <p>{overview}</p>
                <p>{posterPath}</p>
                <p>{status}</p>
                <p>{runtime}</p>
                <p>{budget}</p>
                <p>{revenue}</p>
            </div>
        </div>
    )
}
