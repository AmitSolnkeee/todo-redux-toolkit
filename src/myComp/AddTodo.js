import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeValue } from '../Redux/todoSlice';
import { Navbar, Nav } from 'react-bootstrap';


export const AddTodo = () => {
    const [name,setName]= useState()
    const [date,setDate] = useState()
    const dispatch = useDispatch()
    
    
    return (
        <div>
            <div style={{color:"white"}}>
            <Navbar style={{backgroundColor:' #2b6777'}} >
             <Navbar.Brand href="#home">TODO List</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar>
            </div>
            <div className="design">
               <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="I want to . . . . ."></input><hr style={{width:"50%",marginLeft:"10px"}}></hr>
               <input onChange={(e)=>{setDate(e.target.value)}} type="date"></input><hr style={{width:"50%",marginLeft:"10px",marginBottom:"15px"}}></hr>
               <button onClick={()=>{dispatch(storeValue({n:name,dt:date}))}} className="btn btn-danger" style={{marginLeft:"10px",marginBottom:"10px"}}>Add</button>
           </div>
        </div>
    )
}
