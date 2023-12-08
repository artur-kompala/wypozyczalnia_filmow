import { useEffect, useState} from "react";
import Rent from "./Rent";



export default function Rents(){
    
    const [query, setQuery] = useState("");
    const [rents, setRents] = useState([]);
    const [mode,setMode] = useState("");
    const [selectRent,setSelectRent] = useState("")
    const [change,setChange] = useState(true)

    useEffect(()=>{
        async function fetchRents(){
            try{
                const res = await fetch(`http://localhost:4000/api/rents/${query}`)
                
                if(!res.ok) throw new Error("Smoething went wrong with fetching rents")
                const data = await res.json()
                if(data.Response === 'False')throw new Error('Movie not found')
                setRents(data);
            
            }catch(err){

            }
           
        }
        fetchRents();

    },[query,mode,change])

   

    function handleEye(rent){
        setSelectRent(rent)
        setMode("eye")
    }
    function handleDelete(rent){
        setSelectRent(rent)
        setMode("delete")
    }
    function handleEdit(rent){
        setSelectRent(rent)
        setMode("edit")
    }
    function handleAdd(){
        setMode("add")
    }
    function handleRent(rent){
        setSelectRent(rent)
        setMode('rent')
    }
    switch(mode) {
        case 'edit':
          return 
        case 'add':
            return 
        case 'eye':
            return 
        case 'delete':
          return 
        case 'rent':
            return 
        default:
            return (
        
        
            <div>
                <div className="bar">
                    <h1>Rents</h1>
                    <input className="search" type="text" placeholder="Search rents..." value={query} onChange={(e) => setQuery(e.target.value)}></input>
                </div>
                <table className="box list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Title</th>
                            <th>Rental date</th>
                            <th>Return date</th>
                            <th>Actual return</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rents?.map((rent)=>(<Rent rent={rent} key={rent._id} setChange={setChange} change={change}></Rent>))}
                    </tbody>
                </table>
            </div>
            )
        
      }
    
  
    
}