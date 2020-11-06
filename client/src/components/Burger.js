// this page contains all necessary elements for the hamburger style menu
// import React, React Router, and requisite files for use below
import React, { useState } from "react";
import SidebarNav from "./SidebarNav";
import "../App.css";

// burger component creation
const Burger = () => {
  //create a variable, a toggle, and set the state of the variable to false
  const [modal, setModal] = useState(false);
  //function that will toggle the variable on and off
  const handleModal = () => {
    setModal(!modal);
  };

  //output:
  //print a div that contains a button that is a hamburger menu icon
  //add commands so that when the button is clicked, the variable will toggle on and off
  //if the variable is true, open the SidebarNav component
  //when the variable is false, close the SidebarNav component
  return (
    <div id="burgerbar">
      <button id="burger" onClick={handleModal}>
        <img src="/images/menu2.svg" alt="" title="" />
      </button>

      {modal && <SidebarNav />}
    </div>
  );
};

export default Burger;
