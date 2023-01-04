import React,{ useState} from 'react'
import BackgroundImage from './stu1.jpg'

const App = () => {


  const [count,setCount]=useState(0);
  
  return (
    <div style={loginStyle}>
      <div style={margin}>
        <h1>Student Management System</h1>
        <form> 
         <p>
          <input type='text' placeholder=' Student name' name='name'/><br/>
          </p>
          <p>
          <input type='text' placeholder='Roll no' name='number' /><br/>
          </p>
          <p>
          <p>Check In:</p><input type='time' placeholder='HH:MM' name='in'/><br/>
          </p>
          <p>
          <p>Check Out:</p><input type='time' placeholder='HH:MM' name='out'/><br/>
          </p>
        </form>
        <button onClick={() => setCount(count+1)}>Submit</button>
        <div>
          <h3>Total Student Present Today:{count}</h3>
        </div>
       </div> 
      
    </div>
  )
}
const margin={
  marginLeft:"40px"
}
const loginStyle = {
    
  height:"100vh",
  marginTop: "-1px",
  
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
export default App
