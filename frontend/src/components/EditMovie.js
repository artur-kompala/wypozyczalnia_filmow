import MovieForm from "./MovieForm"

export default function EditMovie({selectMovie,setMode,mode}){

    return(
        <>
            <div className="bar edit">
                <h1>{mode === 'edit'? `You are editing ${selectMovie.tytul}`: 'Add new movie'}</h1>
                
                <MovieForm selectMovie={selectMovie} mode={mode}></MovieForm>
            </div>
        <button className="btn-toggle"onClick={()=>setMode("")}>❌</button>
        </>
        
        
    )
}
