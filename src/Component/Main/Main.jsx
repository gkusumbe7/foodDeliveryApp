import img1 from "../../assets/foodChart1.jpg";
import img2 from "../../assets/foodChart2.jpg";
import img3 from "../../assets/foodChart3.jpg";

import adb1 from "../../assets/adb1.jpg";
import veg from "../../assets/greenveg.png";
import nonveg from "../../assets/rednonveg.png"
import GreatBrit from "../../assets/Great Brit English Breakfast.jpg";
import TheSprinter from "../../assets/The Sprinter.jpeg";
import MuscleMultiplier from "../../assets/The Muscle Multiplier.jpeg";
import JalapenoCorn from "../../assets/Jalapeno Corn Scrambled Eggs Combo.jpg";
import PaneerPower from "../../assets/Paneer Power Breakfast.jpg";

export default function Main() {
  return (
    <>
      <main className="ml-12 mr-12">
        <section>
          <div className="flex justify-around h-72 gap-3 mt-20 p-2 drop-shadow-xl">
            <img src={img1} alt="img1" />
            <img src={img3} alt="img3" />
            <img src={img2} alt="img2" />
          </div>
        </section>

        <section className=" drop-shadow-xl">
          <div className="m-8 p-5 flex justify-between">
            <h1 className="text-2xl font-semibold">ALL DAY BREAKFAST</h1>
            <section>
              <option value="All">All</option>
            </section>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="border-2 border-gray-40 mx-10 flex w-80  flex-col text-gray-800 font-semibold p-3 gap-1 rounded-md ">
              <div className="flex gap-2">
                <img src={veg} alt="veglogo" className="h-5" />
                <p className="text-md font-mono">CONTINENTAL</p>
              </div>
              <img src={adb1} alt="img1" />
              <p className="text-xl">High Protein English Breakfast</p>
              <p className="text-md">
                149 ₹
                <span>
                  <strike>199 ₹</strike>
                </span>
              </p>
              <div className="flex justify-between">
                <p className="text-md">40% OFF</p>
                <button className="text-white border px-6 py-2 font-bold rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 ">
                  ADD
                </button>
              </div>
            </div>
            <div className="border-2 border-gray-40 mx-10 flex w-80  flex-col text-gray-800 font-semibold p-3 gap-1 rounded-md ">
              <div className="flex gap-2">
                <img src={nonveg} alt="veglogo" className="h-5" />
                <p className="text-md font-mono">CONTINENTAL</p>
              </div>
              <img src={GreatBrit} alt="img1" />
              <p className="text-xl">Great Brit English Breakfast</p>
              <p className="text-md">
                149 ₹ 
                <span>
                  <strike>199 ₹</strike>
                </span>
              </p>
              <div className="flex justify-between">
                <p className="text-md">40% OFF</p>
                <button className="text-white border px-6 py-2 font-bold rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 ">
                  ADD
                </button>
              </div>
            </div> 
            <div className="border-2 border-gray-40 mx-10 flex w-80  flex-col text-gray-800 font-semibold p-3 gap-1 rounded-md ">
              <div className="flex gap-2">
                <img src={veg} alt="veglogo" className="h-5" />
                <p className="text-md font-mono">CONTINENTAL</p>
              </div>
              <img src={TheSprinter} alt="img1" />
              <p className="text-xl">The Sprinter</p>
              <p className="text-md">
                149 ₹ 
                <span>
                  <strike>199 ₹</strike>
                </span>
              </p>
              <div className="flex justify-between">
                <p className="text-md">40% OFF</p>
                <button className="text-white border px-6 py-2 font-bold rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 ">
                  ADD
                </button>
              </div>
            </div> 
            <div className="border-2 border-gray-40 mx-10 flex w-80  flex-col text-gray-800 font-semibold p-3 gap-1 rounded-md ">
              <div className="flex gap-2">
                <img src={veg} alt="veglogo" className="h-5" />
                <p className="text-md font-mono">CONTINENTAL</p>
              </div>
              <img src={MuscleMultiplier} alt="img1" />
              <p className="text-xl">The Muscle Multiplier</p>
              <p className="text-md">
                149 ₹ 
                <span>
                  <strike>199 ₹</strike>
                </span>
              </p>
              <div className="flex justify-between">
                <p className="text-md">40% OFF</p>
                <button className="text-white border px-6 py-2 font-bold rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 ">
                  ADD
                </button>
              </div>
            </div>
            <div className="border-2 border-gray-40 mx-10 flex w-80  flex-col text-gray-800 font-semibold p-3 gap-1 rounded-md ">
              <div className="flex gap-2">
                <img src={nonveg} alt="veglogo" className="h-5" />
                <p className="text-md font-mono">CONTINENTAL</p>
              </div>
              <img src={JalapenoCorn} alt="img1" />
              <p className="text-xl">Jalapeno Corn Scrambled Eggs</p>
              <p className="text-md">
                149 ₹ 
                <span>
                  <strike>199 ₹</strike>
                </span>
              </p>
              <div className="flex justify-between">
                <p className="text-md">40% OFF</p>
                <button className="text-white border px-6 py-2 font-bold rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 ">
                  ADD
                </button>
              </div>
            </div>
            <div className="border-2 border-gray-40 mx-10 flex w-80  flex-col text-gray-800 font-semibold p-3 gap-1 rounded-md ">
              <div className="flex gap-2">
                <img src={veg} alt="veglogo" className="h-5" />
                <p className="text-md font-mono">CONTINENTAL</p>
              </div>
              <img src={PaneerPower} alt="img1" />
              <p className="text-xl">Paneer Power Breakfast</p>
              <p className="text-md">
                149 ₹ 
                <span>
                  <strike>199 ₹</strike>
                </span>
              </p>
              <div className="flex justify-between">
                <p className="text-md">40% OFF</p>
                <button className="text-white border px-6 py-2 font-bold rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 ">
                  ADD
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
