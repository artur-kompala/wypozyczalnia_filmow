import { useEffect, useState} from "react";

export default function Rent({rent,key,setChange,change}){

    const [customer,setCustomer] = useState({})
    const [movie,setMovie] = useState({})
    

    function changeDate(date){
        const data = new Date(date);
        const dzien = data.getDate();
        const miesiac = data.getMonth()
        const rok = data.getFullYear();
        const godzina = data.getHours();
        const minuta = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes();

        return `${dzien}/${miesiac+1}/${rok}, ${godzina}:${minuta}`;
    }
    
    
    async function handleReturnMovie(id){
        try {
            const response = await fetch(`http://localhost:4000/api/rents/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              }
            });
      
            if (response.ok) {
              console.log('Movie data sent successfully!');
              
            } else {
              console.error('Failed to send movie data.');
              
            }
          } catch (error) {
            console.error('Error while sending movie data:', error);
            
          }
        setChange(!change)
           
    }
    

    
    

    useEffect(()=>{
        async function fetchCustomers(){
            try{
                const res = await fetch(`http://localhost:4000/api/customers/${rent.klient}`)
                const res2 = await fetch(`http://localhost:4000/api/movies/${rent.film}`)
                if(!res.ok) throw new Error("Smoething went wrong with fetching customers or movies")
                if(!res2.ok) throw new Error("Smoething went wrong with fetching customers or movies")
                const data = await res.json()
                const data2 = await res2.json()
                if(data.Response === 'False')throw new Error('Movie not found')
                setCustomer(data[0])
                if(data2.Response === 'False')throw new Error('Movie not found')
                setMovie(data2[0])
                
            
            }catch(err){

            }
           
        }
        fetchCustomers();

    },[rent.klient,rent.film])
    
    
    
    
    return(
        <tr className="list-movies">
            <th>{customer?.imie}</th>
            <th>{customer?.nazwisko}</th>
            <th>{movie?.tytul}</th>
            <th>{changeDate(rent.data_wypozyczenia)}</th>
            <th>{changeDate(rent.planowany_zwrot)}</th>
            <th>{rent.faktyczny_zwrot ? changeDate(rent.faktyczny_zwrot): <button onClick={()=>handleReturnMovie(rent._id)}>🔙</button>}</th>
            
            
        </tr>
        
    )
}