
import {Button} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
    <Details1 />
    <Details2 />
    <Details3 />

    </div>
  );
}

export default App;

function Details1(){
  
  return(
  <div className='card'>
    <h1>FREE</h1>
    <span><b>$0</b></span><label>/month</label>
    <br></br>
    <br></br>
    <hr></hr>
    <p><b>✔ </b> Single User</p>
    <p><b>✔ </b> 5GB Storage</p>
    <p><b>✔ </b> Unlimited Public Projects</p>
    <p><b>✔ </b> Community Access</p>
    <div className='data'>
    <p style={{color : "rgb(165, 164, 164)"}}>❌ Unlimited Private Projects</p>
    <p style={{color : "rgb(165, 164, 164)"}}>❌ Dedicated Phone Support</p>
    <p style={{color : "rgb(165, 164, 164)"}}>❌ Free Subdomain</p>
    <p style={{color : "rgb(165, 164, 164)"}}>❌ Monthly Status Reports</p>
    </div>
    <Button variant="primary"><b>BUTTON</b></Button>

  </div>
)}

function Details2(){
  return(
  <div className='card'>
    <h1>PLUS</h1>
    <span><b>$9</b></span><label>/month</label>
    <br></br>
    <br></br>
    <hr></hr>
    <p><b>✔ 5 Usersr</b></p>
    <p><b>✔ </b> 5GB Storage</p>
    <p><b>✔ </b> Unlimited Public Projects</p>
    <p><b>✔ </b> Community Access</p>
    <p><b>✔ </b> Unlimited Private Projects</p>
    <p><b>✔ </b> Dedicated Phone Support</p>
    <p><b>✔ </b> Free Subdomain</p>
    <p style={{color : "rgb(165, 164, 164)"}}>❌ Monthly Status Reports</p>
    <Button variant="primary"><b>BUTTON</b></Button>

  </div>
)}

function Details3(){
  return(
  <div className='card'>
    <h1>PRO</h1>
    <span><b>$49</b></span><label>/month</label>
    <br></br>
    <br></br>
    <hr></hr>
    <p><b>✔ Unlimited Users</b></p>
    <p><b>✔ </b> 150GB Storage</p>
    <p><b>✔ </b> Unlimited Public Projects</p>
    <p><b>✔ </b> Community Access</p>
    <p><b>✔ </b> Unlimited Private Projects</p>
    <p><b>✔ </b> Dedicated Phone Support</p>
    <p><b>✔ Unlimited </b> Free Subdomains</p>
    <p><b>✔ </b> Monthly Status Reports</p>
    <Button variant="primary"><b>BUTTON</b></Button>

  </div>
)}