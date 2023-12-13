export default function DeleteCustomer({select,setMode}){
    const handleDeleteMovie = async(id) =>{
        try {
            const response = await fetch(`http://localhost:4000/api/customers/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
            });
    
            if (response.ok) {
            console.log('Movie data delete successfully!');
            } else {
            console.error('Failed to delete movie data.');

            }
        } catch (error) {
            console.error('Error while delete movie data:', error);
            
        }
        setMode("")
    };
    return(
        <div className="bar delete">
            <h1>Are you sure you want to delete this customer?</h1>
            <button className="btn" onClick={()=>handleDeleteMovie(select._id)}>✅</button>
            <button className="btn" onClick={()=>setMode("")}>❌</button>
            
        </div>
        
    )
}