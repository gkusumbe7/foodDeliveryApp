import googleplayImg from "../../assets/google-play.jpg";
import facebook from "../../assets/icons8-facebook-48.png";
import twitter from "../../assets/icons8-twitter-48.png"
import instagram from "../../assets/icons8-instagram-48.png"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Footer() {
  return (
    <>

      <div className= "md:p-5 p-2 lg:px-14 md:px-2 ml-20 mr-20 mb-10 md:ml-0 md:mr-0 md:mb-0">
        <section className="mt-5 lg:flex justify-between">
          <div className=" lg:flex gap-14 text-gray-500">
            <div className="flex flex-col gap-5 text-sm font-bold">
              <a href="">
                <p className="text-md text-gray-400 font-bold ">COMPANY</p>
              </a>
              <a href="">
                <p>FAQ</p>
              </a>
              <a href="">
                <p>About</p>
              </a>
              <a href="">
                <p>Careers</p>
              </a>
              <a href="">
                <p>Blog</p>
              </a>
            </div>

            <div className="flex flex-col gap-5 text-sm font-bold">
              <a href="">
                <p className="text-md text-gray-400 font-bold ">
                  HELP & CONTACT
                </p>
              </a>
              <a href="">
                <p>Help Center</p>
              </a>
              <a href="">
                <p>Email Us</p>
              </a>
              <a href="">
                <p>080-4042-4242</p>
              </a>
              <a href="">
                <p></p>
              </a>
            </div>
            <div className="flex flex-col gap-5 text-sm font-bold">
              <a href="">
                <p className="text-md text-gray-400 font-bold ">MORE FROM US</p>
              </a>
              <a href="">
                <p>Bulk/Party Order</p>
              </a>
              <a href="">
                <p>Cake Order</p>
              </a>
              <a href="">
                <p>FreshClub</p>
              </a>
              <a href="">
                <p>Offers</p>
              </a>
            </div>
          </div>

          <div className="flex md:p-10 flex-col gap-6 text-sm font-bold text-gray-500">
            <p>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</p>
            
            <div className="p-1  lg:flex  gap-10">
            <input type="search" className="px-2 py-1 border" placeholder="Enter your email" name="" id="emailId" />
            <button className="border hover:text-yellow-50 px-2 hover:bg-orange-500 m-2 p-2">Subscribe</button>
            </div>
            <div className="lg:flex flex items-center gap-4">
                <img src={googleplayImg} className="h-10" alt="googleplayImg" />
                <img src={facebook} className="h-8" alt="facebook" />
                <img src={twitter} className="h-8" alt="twitter" />
                <img src={instagram} className="h-8" alt="instagram" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
