/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';
import './App.css';
import About from "./About.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Legal from "./Legal.js";
import Footer from "./Footer.js";
import Nav from "./Nav.js";
/*import Community from "./Community.js";*/
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
  
function App() {
    //Google Fonts
    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Spectral', 'Karla', 'Source Sans Pro']
        }
      });
     }, []);

     const Error = () => {
      return (
        <h3>404 - Not found</h3>
      );
    };

  return (

  <BrowserRouter
  basename={'/'}
  forceRefresh={true}>

    <div className="App">

    <Nav/>

      {/* Content wrap to keep footer at bottom of page */}
      <div className="content-wrap">
        {/* Contains website data in multiple routes */}
          <Switch>
    
          
            
            <Route path="/about" component={About}/> 

            <Route path="/contact" component={Contact}/>
            
            <Route path="/legal" component={Legal} />

            {/* 404 page get rendered */}
            {/* <Route component={Error}/> */}
            
            <Route path = "/" exact component={Home}/>

            {/* <Route path="/community" component={Community} /> */}

          </Switch>
        
      </div>
      
      <Footer/>
      
    </div>
    </BrowserRouter>
  );
      }

export default App;

/*

============ Test =============

 <Route
  exact={true}
  path={'/'}
  component={Home}
/>

<BrowserRouter
  basename={'/'}
  forceRefresh={true}
>


 */