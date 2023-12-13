export default function Customer({customer,handleDeleteCustomer,handleEditCustomer}){
    function changeDate(date){
        const data = new Date(date);
        const dzien = data.getDate();
        const miesiac = data.getMonth()
        const rok = data.getFullYear();
        const godzina = data.getHours();
        const minuta = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes();

        return `${dzien}/${miesiac+1}/${rok}, ${godzina}:${minuta}`;
    }
    
    
    return(
        <tr className="list-movies">
            <th>{customer.imie}</th>
            <th>{customer.nazwisko}</th>
            <th>{customer.adres}</th>
            <th>{customer.telefon}</th>
            {customer.data_rejestracji? <th>{changeDate(customer.data_rejestracji)}</th>: <th></th>}
            <th><button className="btn" onClick={()=>handleEditCustomer(customer)}>✏️</button></th>
            <th><button className="btn" onClick={()=>handleDeleteCustomer(customer)}>🗑️</button></th>
        </tr>
    )
}