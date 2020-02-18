import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Nav.css";

class Nav extends Component{

    componentDidMount() {
        window.addEventListener('scroll', () =>{
            const isTop = window.scrollY > 100;
            const nav = document.getElementById('nav');
            const navItem = document.getElementById('nav-item');
            const navItem2 = document.getElementById('nav-item2');
            const navItem3 = document.getElementById('nav-item3');
            const navHome = document.getElementById('nav-home');
            if (isTop){
            nav.classList.add('scrolled');
            navItem.classList.add("item-scrolled");
            navItem2.classList.add("item-scrolled");
            navItem3.classList.add("item-scrolled");
            navHome.classList.add("item-scrolled");
            } else {
            nav.classList.remove('scrolled');
            navItem.classList.remove("item-scrolled");
            navItem2.classList.remove("item-scrolled");
            navItem3.classList.remove("item-scrolled");
            navHome.classList.remove("item-scrolled");
            }
        });
    }
    
    componentWillUnmount() {
    window.removeEventListener('scroll');
    }

    render(){
        return(
        <div id='nav' className='Nav-bar'>
            <AnchorLink href="#Home" id="nav-home" className="Nav-item hvr-shrink">Home</AnchorLink>
            <AnchorLink href="#About_Me" id="nav-item" className="Nav-item hvr-shrink">About Me</AnchorLink>
            <AnchorLink href="#Recent_Work" id="nav-item2" className="Nav-item hvr-shrink">Work History</AnchorLink>
            <AnchorLink href="#Contact_Info" id="nav-item3" className="Nav-item hvr-shrink">Contact Info</AnchorLink>
        </div>
        )
    }

}

export default Nav;