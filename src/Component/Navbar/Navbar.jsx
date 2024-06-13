// import { useState } from "react";
// import React from "react";
// function Navbar() {
//   let Links = [
//     { name: "Home", link: "/" },
//     { name: "Service", link: "/" },
//     { name: "About", link: "/" },
//     { name: "Contact", link: "/" },
//     { name: "Log in", link: "/" },
//   ];

//   let [open, setOpen] = useState(false);

//   return (
//     <>
//       <div className="shadow-md w-full fixed top-0 left-0">
//         <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//           <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
//             <span className="text-3xl text-indigo-600 mr-1 pt-2">
//               <ion-icon name="logo-ionic"></ion-icon>
//             </span>
//             Designer
//           </div>

//           <div
//             onClick={() => setOpen(!open)}
//             className="text-3xl absolute right-8 top-6 cursot-pointer md:hidden"
//           >
//             <ion-icon name= {open ? "close" : "menu-outline"}></ion-icon>
//           </div>
//           <ul
//            className={`md:flex md:items-center
//           md:pb-0 pb-12 absolute md:static
//           bg-white md:z-auto z-[-1] left-0 w-full
//           md:w-auto md:pl-0 pl-9 transition-all
//           duration-500 ease-in ${open?'top-20':'top-[-490px]'} md:opacity-100 opacity-0}`}
//           >
//             {Links.map((Link, index) => (
//               <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
//                 <a
//                   href={Link.link}
//                   className="text-gray-800 hover:text-gray-400 duration-500"
//                 >
//                   {Link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
import { useState } from "react";
import foodImg from "../../assets/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg";

function Navbar() {
  const[open, setOpen ] = useState(false);

   return (
    <>
      <div className="fixed top-0 w-full z-10 ">
        <nav  className="bg-gradient-to-r from-orange-500 to-orange-400 py-2 drop-shadow-xl">
          <div className="container mx-auto md:flex md:items-center justify-between px-3">
            <div className="flex md:flex-none  justify-between items-center ">
                  <div className="flex items-center p-1">
                  <img
                      src={foodImg}
                      alt="logo"
                       className="drop-shadow-xl h-12 border-4 border-black rounded-full"
                    />
                   <p className="drop-shadow-xl text-md text-white font-semibold hover:text-black px-2 py-2">FreshMenu</p>
              
                  </div>
                  
                  <div
                      className="text-3xl cursot-pointer md:hidden
                       hover:shadow-md pt-2
                      "
                      onClick={()=>setOpen(!open)}
                    >
            <ion-icon name= {open ? "close" : "menu-outline"}></ion-icon>
          </div>

            </div>
            
            <ul 
            // className="flex flex-col gap-2 md:flex md:flex-row md:block "
            
            className={`md:flex md:items-center
                        md:pb-0 pb-10 pr-10 md:pr-0 absolute md:static
                        md:z-auto z-[-1] left-0 w-full
                        md:w-auto  pl-14 transition-all
                        flex md:flex-row flex-col md:bg-none 
                        md:bg-inherit
                        lg:gap-2 
                        gap-2
                        text-black md:text-white
                        duration-0 ease-in ${open?'top-18':'top-[-490px]'} }`}>
               <input
                type="search"
                name="search"
                id="search-Input"
                placeholder="Search...."
                className="hidden  lg:block drop-shadow-xl p-2 text-sm  rounded-xl  hover:border-black h-10 "
              />
              <a
                href="#"
                className="drop-shadow-xl  font-semibold hover:text-black px-1 py-1 hover:shadow-xl hover:bg-yellow-300 rounded-md"
                >
                Overview
              </a>
              <a
                href="#"
                className="drop-shadow-xl  font-semibold hover:text-black px-1 py-1 hover:shadow-xl hover:bg-yellow-300 rounded-md"
                >
                Food Order
              </a>
              <a
                href="#"
                className="drop-shadow-xl  font-semibold hover:text-black px-1 py-1 hover:shadow-xl hover:bg-yellow-300 rounded-md"
              >
                Favorite
              </a>
             
              <a
                href="#"
                className="drop-shadow-xl  font-semibold hover:text-black px-1 py-1 hover:shadow-xl hover:bg-yellow-300 rounded-md"
                >
                Sign In
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
