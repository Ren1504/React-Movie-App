import React, {useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from "./Card";

const API_URL = "https://www.omdbapi.com/?apikey=d19100fc"

const App = () =>
{

    useEffect(()=>
    {SearchMovies('Batman');}
    ,[])

    const [movies,setMovies] = useState([]);
    const [searchTerm , setSearchTerm] = useState([]);


    const SearchMovies = async (title) =>
    {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();;

    setMovies(data.Search);
    
    }

    
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      SearchMovies(searchTerm);
    }
  }


    return(
        
    <div className = "app">
        <h1 className = "text-center title">Movie Kitsune</h1>
        <div className = " search d-flex align-items-center justify-content-center">
            <div className ="mw-100 input-group rounded">
                <input value = {searchTerm}  onChange = {(e) => setSearchTerm(e.target.value)} onKeyPress = {handleKeyPress} type="search" className = "form-control rounded" placeholder="Search" aria-label="Batman" aria-describedby="search-addon" />

                <img id = "se" alt = "movieImg" onClick = {() => SearchMovies(searchTerm)}className = 'ms-3 searchiocn' src = "https://cdn-icons-png.flaticon.com/32/8915/8915520.png"/> 
            </div>            
        </div>

        {
            movies?.length > 0
            ?(
            <div className = "d-flex flex-wrap justify-content-center">
            {
                movies.map((movie) => (<Card movie = {movie}/>))
            }
            </div>
            )
            :(
                <div className = "no"><h1>No Results Found</h1></div>
            )
            
        }

        </div>

    )
        }

export default App;
