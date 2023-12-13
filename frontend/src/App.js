import { useEffect, useState} from "react";
import './App.css';
import Movies from './components/Movies/Movies';
import Rents from './components/Rents/Rents';
import Customers from './components/Customers/Customers';
import Eye from "./components/Movies/Eye";
import DeleteMovie from "./components/Movies/DeleteMovie";
import EditMovie from "./components/Movies/EditMovie"
import RentMovie from "./components/Rents/RentMovie"
import EditCustomer from "./components/Customers/EditCustomer";
import DeleteCustomer from "./components/Customers/DeleteCustomer";

function App() {
  const [mode,setMode] = useState("");
  const [select,setSelect] = useState("")

  
  function handleEye(movie){
    setSelect(movie)
    setMode("eye")
  }
  function handleDelete(movie){
      setSelect(movie)
      setMode("delete")
  }
  function handleEdit(movie){
      setSelect(movie)
      setMode("edit")
  }
  function handleAdd(){
      setMode("add")
  }
  function handleRent(movie){
      setSelect(movie)
      setMode('rent')
  }
  function handleDeleteCustomer(customer){
      setSelect(customer)
      setMode('deleteCustomer')

  }
  function handleEditCustomer(customer){
      setSelect(customer)
      setMode('editCustomer')

  }
  function handleAddCustomer(customer){
      setSelect(customer)
      setMode('addCustomer')
  }
  
  switch(mode) {
      case 'edit':
        return <EditMovie select={select} setMode={setMode} mode={mode}></EditMovie>
      case 'add':
          return <EditMovie select={select} setMode={setMode} mode={mode}></EditMovie>
      case 'eye':
          return <Eye select={select} setMode={setMode}></Eye>
      case 'delete':
        return <DeleteMovie select={select} setMode={setMode}></DeleteMovie>
      case 'rent':
          return <RentMovie select={select} setMode={setMode}></RentMovie>
      case 'editCustomer':
        return <EditCustomer select={select} setMode={setMode} mode={mode}></EditCustomer>
      case 'addCustomer':
        return <EditCustomer select={select} setMode={setMode} mode={mode}></EditCustomer>
      case 'deleteCustomer':
        return <DeleteCustomer select={select} setMode={setMode}></DeleteCustomer>
      default: return (
        <div className="App">
            <Movies mode={mode} setMode={setMode} handleEye={handleEye} handleDelete={handleDelete} handleEdit={handleEdit} handleAdd={handleAdd}></Movies>
            <Rents></Rents>
            <Customers handleDeleteCustomer={handleDeleteCustomer} handleEditCustomer={handleEditCustomer} handleAddCustomer={handleAddCustomer}></Customers>
        </div>
      );
  
    
  }
}

export default App;
