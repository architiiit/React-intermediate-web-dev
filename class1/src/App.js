import { useState } from 'react';
import './App.css';

function App() {

  // const [firstName,setFirstName]=useState("");
  // const [lastName,setLastName]=useState("");

  // console.log(firstName)
  // console.log(lastName)
  // function changeFirstNameHandler(event){
  //   // console.log("Printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event){
  //   // console.log('Printing last name')
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData,setFormData]=useState({firstName:"",lastName: "",email:"",comments:"",IsVisible:true, mode:"",favCar:""});
  // console.log(formData)
  function changeHandler(event){
    const {name ,value,checked,type}=event.target;
  //  console.log(event.target) 
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: type==="checkbox" ? checked : value
      }
    });
  }
  // console.log(formData.email)
  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("Finally printing the entire form data")
    console.log(formData)
  }
  return (
    <div className='App'>
      <form onSubmit={submitHandler}>


        <input type="text"
        placeholder='first name' 
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
        />


        <br />
        <br />


        <input type="text"
        placeholder='last name' 
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName}
        />

        
        <br />
        <br /> 


        <input type="email"
        placeholder='Enter your Email here' 
        onChange={changeHandler}
        name="email"
        value={formData.email}
        
        />

        <br />
        <br />

        <textarea
        placeholder='Enter your comments here'
        onChange={changeHandler}
        name="comments"
        value={formData.comments}
        ></textarea>

        <br />
        <br />

        <input 
        type="checkbox" 
        onChange={changeHandler}
        name="IsVisible"
        id='IsVisible'
        checked={formData.IsVisible}
        />
        <label htmlFor='IsVisible'>Am i visible ?</label>


      <br />
      <br />

      <fieldset>
        <legend>
          Mode:
        </legend>
        <input 
        type="radio"
        onChange={changeHandler}
        name='mode'
        value="Online-Mode"
        id='Online-Mode'
        checked={formData.mode ==="Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online Mode</label>

        <input 
        type="radio"
        onChange={changeHandler}
        name='mode'
        value="Offline-Mode"
        id='Offline-Mode'
        checked={formData.mode==="Offline-Mode"}
        />
      <label htmlFor="Offline-Mode">Offline Mode</label>
      </fieldset>
      
      <label htmlFor="favCar">Tell me yor Favourite car</label>
      <select
        name='favCar'
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}
      >
        <option value="scorpio">Scorpio</option>
        <option value="fortuner">Fortuner</option>
        <option value="thar">Thar</option>
        <option value="defender">Defender</option>
      </select>

       {/* <input type="submit" value='submit'/> */}
      <br />
      <br />
       <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
