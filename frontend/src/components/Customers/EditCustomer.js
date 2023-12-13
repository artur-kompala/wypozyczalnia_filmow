import React, { useState} from 'react';

export default function EditCustomer({select,mode,setMode}){
    
    const [formData, setFormData] = useState({
        imie: mode === "editCustomer" ? select.imie :'',
        nazwisko: mode === "editCustomer" ? select.nazwisko :'',
        adres: mode === "editCustomer" ? select.adres :'',
        telefon: mode === "editCustomer" ? select.telefon :0,
        data_rejestracji: mode === "editCustomer" ? select.data_rejestracji :0,
      });

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      setFormData((prevData) => ({
        ...prevData,
        data_dodania: new Date().toISOString(),
      }));
  
      try {
        const response = await fetch(`http://localhost:4000/api/customers${mode === "editCustomer" ? `/${select._id}`:""}`, {
          method: mode === "editCustomer" ? 'PUT':"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Movie data sent successfully!');
        
        } else {
          console.error('Failed to send movie data.');
          
        }
      } catch (error) {
        console.error('Error while sending movie data:', error);
       
      }
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input className="input" type="text" name="imie" value={formData.imie} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input className="input" type="text" name="nazwisko" value={formData.nazwisko} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input className="input" type="text" name="adres" value={formData.adres} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone number:
          <input className="input" type="number" name="telefon" value={formData.telefon} onChange={handleChange} />
        </label>
        <br />
        <button className="btn delete"type="submit">✅</button>
      </form>
      <button className="btn-toggle"onClick={()=>setMode("")}>❌</button>
        
        </>
        
    )
}