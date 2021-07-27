import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { khaki } from 'color-name';

function App() {
  const detectives=['sherlock','demiyan darkblood','bomkesh','kakababu','feluda','kuyasha','tin guyenda']
 const products=[
   {name:'Photoshop',price:'$90.99'},
   {name:'Illustrator',price:'$60.99'},
   {name:'PDF Reader',price:'$6.99'},
   {name:'Premiere El '}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         I am a react person.
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            detectives.map(detective => <li>{detective}</li>)
          }
         {
           products.map(product => <li>{product.name}</li>)
         }
        </ul>
        {
          products.map(pd=> <Product product = {pd}></Product>)
        }
        <Khaoya></Khaoya>
        
  
      </header>
    </div>
  );
}
function Counter(){
  const[count, setCount]=useState(10);
  const hanleIncrease= ()=>{
    const newCount = count+1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={hanleIncrease}>Increase</button>
      <button onMouseMove={() =>setCount (count-1)}>Decrease</button>
    </div>
  )
}

function Khaoya(){
const [gun,  setGun]= useState(3);
  return(
    <div>
      <h1>ami khaitasi:{gun}</h1>
    <button onClick={() => setGun(gun+1)}>ekhon khailam</button>
    <button onClick= {() => setGun(gun-1)} > ami asole khai nai mithha bolsi</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold', margin:'10px',width:'400px'}}>
      <h1>name: {props.name}</h1>
      <h3>Profession: {props.job}</h3>
    </div>
  )
}
function Users(){
  const [users, setUsers]=useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
  
  return(
    <div>
      <h3>Dynamic User : {users.length} </h3>
      {
        console.log(users)
      }
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'400px',
    width:'350px',
    float:'left'
  }
  const {name, price}=props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price} </h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
