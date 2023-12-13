export default function Eye({select,setMode}){
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
                            <th>{select?.tytul}</th>
                            <th>{select?.gatunek}</th>
                            <th>{select?.czas_trwania}</th>
                            <th>{select?.ocena}</th>
                            <th>{select?.opis}</th>
                            
                            <th>{select?.rezyser}</th>
                            <th><ul>{select?.aktorzy.map((a)=><li>{a}</li>)}</ul></th>
                        </tr>
                        
                    </tbody> 
            </table>
            <button className="btn-toggle" onClick={()=>setMode("")}>❌</button>
        </>
        
    )
}