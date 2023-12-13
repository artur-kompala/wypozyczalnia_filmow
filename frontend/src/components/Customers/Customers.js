import { useEffect, useState} from "react";
import Customer from "./Customer"


export default function Customers({handleAddCustomer,handleDeleteCustomer,handleEditCustomer}){

    const [customers,setCustomers] = useState([])
    

    useEffect(()=>{
        async function fetchMovies(){
            try{
                const res = await fetch(`http://localhost:4000/api/customers`)
                
                
                if(!res.ok) throw new Error("Smoething went wrong with fetching movies")
                const data = await res.json()
                if(data.Response === 'False')throw new Error('Movie not found')
                setCustomers(data);
            
            }catch(err){

            }
           
        }
        fetchMovies();
    },[])
    
    return(
        <div>
                <div className="bar">
                    <h1>Customers</h1>
                    <button className="btn" onClick={()=>handleAddCustomer()}>🆕</button>
                </div>
                <table className="box list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone number</th>
                            <th>Registration</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer=><Customer customer={customer} handleEditCustomer={handleEditCustomer} handleDeleteCustomer={handleDeleteCustomer}></Customer>)}
                    </tbody>
                </table>
            </div>
    )   
}