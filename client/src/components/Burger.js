import React, { useState } from 'react';
import SidebarNav from './SidebarNav';
import '../App.css';

const Burger = () => {
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }


    return (
        <div id="burgerbar">
            <button id="burger" onClick={handleModal} >
                <img src="/images/menu2.svg" alt="" title="" />
            </button >

            {modal && 
            <SidebarNav />}


        </div>
    )
}

export default Burger;