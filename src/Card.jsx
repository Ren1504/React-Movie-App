import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card  = ({movie}) => 
{
 

    return(
        <div className="card " style={{width: '300px'}}>
    <img src={movie.Poster} className="card-img-top img-fluid" alt={movie.Title}/>
    <div className="card-body text-center">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">Type: {movie.Type}</p>
        <p className="card-text">Year: {movie.Year}</p>
    </div>
</div>)
}

export default Card