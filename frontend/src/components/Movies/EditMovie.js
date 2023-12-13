import MovieForm from "./MovieForm"

export default function EditMovie({select,setMode,mode}){

    return(
        <>
            <div className="bar edit">
                <h1>{mode === 'edit'? `You are editing ${select.tytul}`: 'Add new movie'}</h1>
                
                <MovieForm select={select} mode={mode}></MovieForm>
            </div>
        <button className="btn-toggle"onClick={()=>setMode("")}>❌</button>
        </>
        
        
    )
}
