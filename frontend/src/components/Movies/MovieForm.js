import React, { useState} from 'react';

export default function MovieForm({mode,select}){
    
    const [formData, setFormData] = useState({
        tytul: mode === "edit" ? select.tytul :'',
        gatunek: mode === "edit" ? select.gatunek :'',
        rezyser: mode === "edit" ? select.rezyser :'',
        czas_trwania: mode === "edit" ? select.czas_trwania :0,
        ocena: mode === "edit" ? select.ocena :0,
        opis: mode === "edit" ? select.opis :'',
        aktorzy: mode === "edit" ? select.aktorzy :'',
        data_dodania: mode === "edit" ? select.data_dodania :'',
      });
    
    
    

    
  
    const handleChange = (e) => {
      const { name, value } = e.target;

      const updatedValue = name === 'aktorzy' ? value.split(',') : value;

      setFormData((prevData) => ({
        ...prevData,
        [name]: updatedValue,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      setFormData((prevData) => ({
        ...prevData,
        data_dodania: new Date().toISOString(),
      }));
  
      try {
        const response = await fetch(`http://localhost:4000/api/movies${mode === "edit" ? `/${select._id}`:""}`, {
          method: mode === "edit" ? 'PUT':"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Movie data sent successfully!');
          // Dodaj kod obsługi sukcesu
        } else {
          console.error('Failed to send movie data.');
          // Dodaj kod obsługi błędu
        }
      } catch (error) {
        console.error('Error while sending movie data:', error);
        // Dodaj kod obsługi błędu
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input className="input" type="text" name="tytul" value={formData.tytul} onChange={handleChange} />
        </label>
        <br />
        <label>
          Genre:
          <input className="input" type="text" name="gatunek" value={formData.gatunek} onChange={handleChange} />
        </label>
        <br />
        <label>
          Director:
          <input className="input" type="text" name="rezyser" value={formData.rezyser} onChange={handleChange} />
        </label>
        <br />
        <label>
          Duration:
          <input className="input" type="number" name="czas_trwania" value={formData.czas_trwania} onChange={handleChange} />
        </label>
        <br />
        <label>
          Rating:
          <input className="input" type="number" name="ocena" value={formData.ocena} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea className="input" name="opis" value={formData.opis} onChange={handleChange} />
        </label>
        <br />
        <label>
          Actors (comma-separated):
          <input className="input"type="text" name="aktorzy" value={formData.aktorzy} onChange={handleChange} />
        </label>
        <br />
        <button className="btn delete"type="submit">✅</button>
      </form>
    );
  };