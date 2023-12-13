import { useEffect, useState} from "react";
import Movie from "./Movie";


export default function Movies({mode,handleEye,handleAdd,handleDelete,handleEdit,handleRent}){

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
   

    useEffect(()=>{
        async function fetchMovies(){
            try{
                const res = await fetch(`http://localhost:4000/api/movies/${query}`)
                
                
                if(!res.ok) throw new Error("Smoething went wrong with fetching movies")
                const data = await res.json()
                if(data.Response === 'False')throw new Error('Movie not found')
                setMovies(data);
            
            }catch(err){

            }
           
        }
        fetchMovies();

    },[query,mode])

            return (
        
        
            <div>
                <div className="bar">
                    <h1>Movies</h1>
                    <input className="search" type="text" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)}></input>
                    <button className="btn new" onClick={handleAdd}>🆕</button>
                </div>
                <table className="box list">
                    <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Director</th>
                            <th>Duration</th>
                            <th>Available</th>
                            <th>View details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies?.map((movie,index)=>(<Movie movie={movie} key={movie._id} handleEye={handleEye} handleDelete={handleDelete} handleEdit={handleEdit} handleRent={handleRent} index={index}></Movie>))}
                    </tbody>
                </table>
            </div>
            )
        
      }
    