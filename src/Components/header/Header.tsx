import Hamburger from "hamburger-react";

import { useState } from "react";
function Header() {
  const[toggle,settoggle]=useState('false')
    return (
      <header className="w-full ">
       {/* top green text */}
       <div className=" w-full tracking-widest h-full	 leading-3 text-center text-white py-2 text-sm  kale_ghaz ">Enjoy Free Shipping On All Orders</div>
       
       
        
       {/* topheader.logo.menu searchbar for display under  500px */}
       <div className="header_for_phone h-20 lg:hidden flex  justify-between px-5">
       <div className="div_header1 flex items-center ">
          
          
       <div onClick={()=>{settoggle(!toggle),console.log(toggle)}}><Hamburger size={24} /></div>
       {toggle}
          <button><img className="w-6 mx-2" src="/public/headericons/profile.png" alt="" /></button>
          </div>
       
       
       
       <div className=" flex justify-start items-center ">
          <img className="" src="/public/Logo/Logo.jpg" alt="" />
        </div>
        
        
        
        <div className="div_header2 flex items-center ">
            <button><img className="w-6 mx-2" src="/public/headericons/heart.jpg" alt="" /></button>
            <button><img className="w-6 mx-2" src="/public/headericons/shopping.jpg" alt="" /></button>

        </div>
        
          
       </div>




       {/* topheader.logo.menu searchbar for display over 500px */}
       <div className="lg:h-28 hidden  header_for_pc   h-20 bg-white px-10    py-4 lg:flex  justify-between ">
        {/* logo */}
        <div className="lg:flex-1 lg:flex justify-start items-center ">
          <img className="" src="/public/Logo/Logo.jpg" alt="" />
        </div>
        {/* menu */}
        <ul className="flex  justify-between gap-4 menu flex-1">
          <li className=" flex items-center text-lg mont cursor-pointer ">Collection</li>
          <li className=" flex items-center text-lg mont cursor-pointer ">NewIn</li>
          <li className=" flex items-center text-lg mont cursor-pointer ">Modweek</li>
          <li className=" flex items-center text-lg mont cursor-pointer ">PlusSize</li>
          <li className=" flex items-center text-lg mont cursor-pointer ">Sustainablity</li>
        </ul>
        <div className="flex   lg:flex-1 justify-end flex-nowrap">
          <div className="div_header1 flex items-center ">
          <button><img className="w-6 mx-2" src="/public/headericons/searchicon.jpg" alt="" /></button>
          <button><img className="w-6 mx-2" src="/public/headericons/profile.png" alt="" /></button>
          </div>
          <div className="div_header2 flex items-center ">
            <button><img className="w-6 mx-2" src="/public/headericons/heart.jpg" alt="" /></button>
            <button><img className="w-6 mx-2" src="/public/headericons/shopping.jpg" alt="" /></button>

          </div>
          </div>

        </div> 
      </header>
    );
  }
  
  export default Header;