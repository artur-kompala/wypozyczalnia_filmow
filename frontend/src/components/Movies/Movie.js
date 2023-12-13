import { useEffect, useState} from "react";


export default function Movie({movie,handleDelete,handleEdit,handleEye,handleRent,key,index}){

    const [available,setAvailable] = useState("")

    useEffect(()=>{
        async function fetchMovies(){
            try{
                const res = await fetch(`http://localhost:4000/api/rents/${movie._id}`)
                
                if(!res.ok) throw new Error("Smoething went wrong with fetching movies")
                const data = await res.json()
                if(data.Response === 'False')throw new Error('Movie not found')
                setAvailable(data[0].film)
            
            }catch(err){

            }
           
        }
        fetchMovies();

    },[])
    
    return(
        <tr className="list-movies">
            <th>{index+1}</th>
            <th>{movie.tytul}</th>
            <th>{movie.gatunek}</th>
            <th>{movie.rezyser}</th>
            <th>{movie.czas_trwania}</th>
            {movie._id === available?
            <th><button  className="btn" >❌</button></th>:
            <th><button  className="btn" onClick={()=>handleRent(movie)}>✅</button></th>
            }
            <th><button  className="btn" onClick={()=>handleEye(movie)}>👁️</button></th>
            <th><button  className="btn" onClick={()=>handleEdit(movie)}>✏️</button></th>
            <th><button  className="btn" onClick={()=>handleDelete(movie)}>🗑️</button></th>
        </tr>
        
    )
}