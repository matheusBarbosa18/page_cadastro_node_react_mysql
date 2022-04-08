import React, {useState} from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [Values, setValues] = useState();
  const [employeeList, setEmployeeList] = useState([]);
 

const handleChangeValues = Value => {
  setValues(prevValue=>({
    ...prevValue,
    [Value.target.name]: Value.target.value,
    [Value.target.cost]: Value.target.value,
    [Value.target.category]: Value.target.value,
  }))
}
const handleclickbutton = () =>{
  Axios.post("http://localhost:3001/register", {
    name : Values.name,
    cost : Values.cost,
    category : Values.category,
  }).then(()=>{
    setEmployeeList([
      ...employeeList,
      {
        name : Values.name,
        cost : Values.cost,
        category : Values.category,
      },
    ]);
  })
}

  return (
    <div className="app--container">
      <div className='register--container'>
        <h1 className='register--title'>Cadastro</h1>
        <input type='text' name="name" placeholder="nome" className="register--input" onChange={handleChangeValues}/>
        <input type='text' name="cost" placeholder="preço" className="register--input" onChange={handleChangeValues}/>
        <input type='text' name="category" placeholder="categoria" className="register--input" onChange={handleChangeValues}/>
        <button className='register--button' onClick={() => handleclickbutton()}>Cadastrar</button>
        
       
      </div>

     

    </div>
  );
}

export default App;
