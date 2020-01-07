import React from 'react';
import Button from '../Components/Button';
import NavBar from '../Components/NavBar';
import logo from '../Assets/LOGO.png';
import homePage from '../Assets/home_Page.png';
class Home extends React.Component{
    render (){
        return (
            <div className="home"> 
            
            <img className="logo" src={logo}></img>
             </div>
           
          

        )
    }
}
export default Home ;