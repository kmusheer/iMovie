import { useState } from 'react';
import './App.css';

const countries = [
  { name: "India", value: "IN", states : {MH : ["Mumbai", "Pune"] }}, //cities: ["Delhi", "Mumbai"]
  { name: "China", value: "CH", cities : ["Xinjong" ,"Xinjing"] },
  { name: "Pak", value: "PK", states : {MH : ["Mumbai", "Pune"]}, cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

function App() {

  const [country, setcountry] = useState([]);

  const onChange = (e) => {
    console.log(e.target.value);
    setcountry(e.target.value)
  }

  return (
    <div className="">
      <label htmlFor="Country">Country</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select name="country" id="Country" value={country} onChange={onChange}>
        {countries.map((item, index) => {
          return(
          <option value={index} key={index}>{item.name}</option>
          );
        })}
      </select>
      <br />

        <label htmlFor="States">City and States</label>&nbsp;
      <select name="" id="States">
        {countries[country] &&
        countries[country]?.states?.MH ?
        countries[country]?.states?.MH?.map((item, index)=>{
          return(
            // console.log(item)
            <option value={index} key={index}>{item}</option>
          )
        }) :
        countries[country]?.cities?.map((item, index) => {
            return <option value={index} key={index}>{item}</option>;
          })
        }
      </select>
 <br />
        <label htmlFor="City">City</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select name='City'>
        {countries[country] &&
          countries[country]?.cities?.map((item, index) => {
            return <option value={index} key={index}>{item}</option>;
          })}
      </select>

    </div>
  );
}

export default App;
