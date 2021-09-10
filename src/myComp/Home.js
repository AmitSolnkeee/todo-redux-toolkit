import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AddTodo } from './AddTodo';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';



export const Home = () => {
  
 
    return (
        <div className="mainpage">

<Navbar style={{backgroundColor:' white',color:"#022140"}} >
    <Navbar.Brand href="#home">TODO List</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>


   <div className="jumbotron">
     <div style={{marginTop:"50px",marginLeft:"50px"}}>
        <h1>Organize it all<br></br>Todo List</h1>
        <p>Create clear, multi-functional to-do lists to easily manage <br></br> your ideas and work from anywhere so you never forget anything again.</p>

        <Link to="/AddTodo" className="btn btn-danger">
      Lets Get Started
    </Link>
     </div>
     
   </div>

   <div className="pic">
   <CardGroup style={{height:"250px",marginRight:"100px",marginLeft:"100px"}}>
  <Card>
    
    <Card.Body>
      <Card.Title>No sign up. Nothing to install</Card.Title>
      <Card.Text>
      Just start adding tasks. Only sign up if you want to save more than one list.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Share lists with ease.</Card.Title>
      <Card.Text>
      Copy/paste the URL to share a list. No permissions. No formal invites. It's that simple.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Access from any device.</Card.Title>
      <Card.Text>
      Browser based so your lists are always synced and you can access them from anywhere.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
     
   </div>

  
<footer style={{backgroundColor:"#265077",color:"white"}} class="page-footer font-small teal pt-4">


  <div class="container-fluid text-center text-md-left">

    <div class="row">

      
      <div class="col-md-6 mt-md-0 mt-3">

        
        <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
          repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
          harum esse fugiat. Itaque, culpa?</p>

      </div>
      

     

      
      <div class="col-md-6 mb-md-0 mb-3">

       
        <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

      </div>
     

    </div>
    

  </div>
 

  
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://Amitsolnkee.com/"> AmitSolnkee.com</a>
  </div>
  

</footer>

            
        </div>
    )
}
