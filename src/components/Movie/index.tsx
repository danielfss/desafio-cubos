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
            <div className="contentMovie">
                <div className="headerBox">
                    <h2>{title}</h2>
                    <p>{releaseDate}</p>
                </div>
                
                <div className="box">
                    <div className="info">Sinopse
                        <p className="pBox">{overview}</p>
                    </div>
                    <p className="info">Informações</p>
                    <p className="pBox">{status}</p>
                    <p className="pBox">{runtime}</p>
                    <p className="pBox">{budget}</p>
                    <p className="pBox">{revenue}</p>
                </div>
                
            </div>
            <img className="posterBox" src={`${IMAGE_BASE_URL}${posterPath}`}></img>
        </div>
    )
}
