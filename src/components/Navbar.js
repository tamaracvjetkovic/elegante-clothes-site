import React from 'react'
import M from 'materialize-css';
import { useEffect } from 'react';


const Navbar = () => {
  useEffect(() => {
    M.AutoInit();
  });

  const clearSearch = () => {
    const t = document.getElementById("search");
    console.log(t);
    t.value = "";
  }
  const clearSearch2 = () => {
    const t = document.getElementById("search2");
    console.log(t);
    t.value = "";
  }

  return (
    <div className = "Navbar">
      <nav class="z-depth-0" style = {{position: "fixed"}}>
        <div class="nav-wrapper">
          <div style = {{display: "flex", justifyContent: "space-between"}}> 
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>    
            <div className = "rightSideIcons">  
              <a href="elegante-men.html" class="sidenav-trigger"> <i class="material-icons"> person </i> </a>
              <a href="elegante-men.html" class="sidenav-trigger"> <i class="material-icons"> shopping_cart </i> </a>
              <a href="elegante-men.html" class="sidenav-trigger"> <i class="material-icons"> favorite </i> </a>
            </div>
          </div>
          <ul class="hide-on-med-and-down fixed">
            <li><a href="elegante.html" className = "EleganteNavbar">ELEGANTE</a></li>
            <li><a href="elegante-women.html">Women</a></li>
            <li><a href="elegante-men.html">Men</a></li> 
            <li>
               <form class=" hide-on-med-and-down" id="form1" >
                <div class="input-field">
                  <input id="search" type="search" required onkeyup="getBlogs(this.value,0);"/>
                  <label class="label-icon" for="search"><i id="search-icon" class="material-icons">search</i></label>
                  <i class="material-icons" onClick = { clearSearch }>close</i>
                  <div id="searchResults" ></div>
                </div>
              </form>
            </li>
          </ul>   
          <ul class="hide-on-med-and-down right">
            <li><a href="elegante.html">Q&A</a></li>
            <li><a href="elegante-women.html">Contact</a></li>
            <li><a href="elegante-men.html"> <i class="material-icons"> person </i> </a></li>
            <li><a href="elegante-men.html"> <i class="material-icons"> shopping_cart </i> </a></li>
            <li><a href="elegante-men.html"> <i class="material-icons"> favorite </i> </a></li>        
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="elegante.html" className = "EleganteNavbar">ELEGANTE</a></li>    
        <li>
          <form id = "form2" >
            <div class="input-field">
              <input id = "search2" type="search" required onkeyup="getBlogs(this.value,0);"/>
              <label class="label-icon" for="search"><i id="search-icon" class="material-icons">search</i></label>
              <i class="material-icons" onClick = { clearSearch2 }> close</i>
              <div id="searchResults"> </div>
            </div>
          </form>
        </li> 
        <li><a href="elegante-women.html">Women</a></li>
        <li><a href="elegante-men.html">Men</a></li>
        <li><a href="elegante.html">Q&A</a></li>
        <li><a href="elegante-women.html">Contact</a></li>
        
      </ul>
    </div>
  )
}

export default Navbar



