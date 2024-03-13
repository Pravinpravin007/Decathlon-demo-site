import logo from './logo.svg';
import './App.css';
import { Nav } from './Logintask/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './Logintask/Loginform';
import { Signup } from './Logintask/Signup';
import {List} from './UpLoadimg/List';
import {Wishlist} from './Logintask/Wishlist';
import {Support} from './Logintask/Support';
import {Mystore} from './Logintask/Mystore';
import {Change1} from './Logintask/Change1';
import {Cart} from './Logintask/Cart';
import {Home} from './Logintask/Home';


function App() {
  // let one1="Hello"
  // var one2="Mother world"
  return (
    // <div style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column',height:'100vh', backgroundImage:'url("https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover' ,filter:'lur',}}>
    //   <div style={{backgroundColor:'rgb(0,0,0,.6)', width:'30vw',height:'50vh', textAlign:'center'}}>
    //     <h1 style={{backgroundColor:'yellowgreen'}}>Hello world</h1>
    //     <h2 style={{backgroundColor:'blue'}}>vanakam da mapla</h2>
          //     <Navbar1  />
          //     <Home />
          //     <Navbar2 />
          //     <Home2 pravin={one1} />
          //     <Work pravin1={one2} />
          //     <Counter />
          //     <form />
              
          //   </div>
          // </div>
          // <div style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column',height:'100vh'}}>
          //   {/* <Form /> */}
          //   {/* <Counter /> */}
            // <BrowserRouter>
            // <Routes>
            //   <Route path ="/"element = {<Counter />} />
            //   <Route path ="/From"element = {<Form />} />
            // </Routes>
            // </BrowserRouter>
          // </div>
        //  <div style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column',height:'100vh', backgroundColor:'black'}}>
          //  <Form />
          //  </div>
        
          <BrowserRouter>
          <Nav />
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Mystore' element={<Mystore />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/Change1' element={<Change1 />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/List' element={<List />} />
        </Routes>
        </BrowserRouter>
  );
      }

      export default App;
