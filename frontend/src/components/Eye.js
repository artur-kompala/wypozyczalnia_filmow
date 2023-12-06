export default function Eye({selectMovie,setMode}){
    return (
        <>
            
            <table className="box list eye">
            
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Duration</th>
                            <th>Rating</th>
                            <th>Description     </th> 
                            <th>Director</th>
                            <th>Actors</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="list-movies eye">
                            <th>{selectMovie.tytul}</th>
                            <th>{selectMovie.gatunek}</th>
                            <th>{selectMovie.czas_trwania}</th>
                            <th>{selectMovie.ocena}</th>
                            <th>{selectMovie.opis}</th>
                            
                            <th>{selectMovie.rezyser}</th>
                            <th><ul>{selectMovie.aktorzy.map((a)=><li>{a}</li>)}</ul></th>
                        </tr>
                        
                    </tbody>
                    
                    
                
                
                
            </table>
           
            <button className="btn-toggle" onClick={()=>setMode("")}>❌</button>
        </>
        
    )
}