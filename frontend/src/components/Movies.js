import { useEffect, useState} from "react";
import Movie from "./Movie";
import Eye from "./Eye";
import DeleteMovie from "./DeleteMovie";
import EditMovie from "./EditMovie"

export default function Movies(){

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [mode,setMode] = useState("");
    const [selectMovie,setSelectMovie] = useState("")

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

    function handleEye(movie){
        setSelectMovie(movie)
        setMode("eye")
    }
    function handleDelete(movie){
        setSelectMovie(movie)
        setMode("delete")
    }
    function handleEdit(movie){
        setSelectMovie(movie)
        setMode("edit")
    }
    function handleAdd(){
        setMode("add")
    }
    switch(mode) {
        case 'edit':
          return <EditMovie selectMovie={selectMovie} setMode={setMode} mode={mode}></EditMovie>
        case 'add':
            return <EditMovie selectMovie={selectMovie} setMode={setMode} mode={mode}></EditMovie>
        case 'eye':
            return <Eye selectMovie={selectMovie} setMode={setMode}></Eye>
        case 'delete':
          return <DeleteMovie selectMovie={selectMovie} setMode={setMode}></DeleteMovie>
        default:
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
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Director</th>
                            <th>Duration</th>
                            <th>Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies?.map((movie)=>(<Movie movie={movie} key={movie._id} handleEye={handleEye} handleDelete={handleDelete} handleEdit={handleEdit}></Movie>))}
                    </tbody>
                </table>
            </div>
            )
        
      }
    
  
    
}