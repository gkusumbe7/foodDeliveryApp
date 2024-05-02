import foodImg from "../../assets/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg";

function Header() {
  return (
    <>
      <div className="fixed top-0 w-full z-10 ">
        <nav
          className="bg-gradient-to-r from-orange-500 to-orange-400 py-2 drop-shadow-xl

">
          <div className="container mx-auto flex items-center justify-between px-3">
            <div className="flex items-center">
              <img
                src={foodImg}
                alt="logo"
                className="drop-shadow-xl

h-12 border-4 border-black rounded-full"
              />
              <p className="drop-shadow-xl

text-md text-white font-semibold hover:text-black px-2 py-2"
>FreshMenu</p>
            </div>

            <div className="hidden md:flex md:items-center gap-2 ">
              <input
                type="search"
                name="search"
                id="search-Input"
                placeholder="Search...."
                className="drop-shadow-xl

p-2 text-sm  rounded-xl border border-white hover:border-black h-10 "
              />
              <a
                href="#"
                className="drop-shadow-xl

text-md text-white font-semibold hover:text-yellow-200 px-2 py-2 hover:shadow-2xl hover:bg-gray-800"
              >
                Overview
              </a>
              <a
                href="#"
                className="drop-shadow-xl

text-md text-white font-semibold hover:text-yellow-300 px-2 py-2 hover:shadow-2xl hover:bg-gray-800"
              >
                Food Order
              </a>
              <a
                href="#"
                className="drop-shadow-xl

text-md text-white font-semibold hover:text-yellow-300 px-2 py-2 hover:shadow-2xl hover:bg-gray-800"
              >
                Favorite
              </a>
              <a
                href="#"
                className="drop-shadow-xl

 text-md text-white font-semibold hover:text-yellow-300 px-2 py-2 hover:shadow-2xl hover:bg-gray-800"
              >
                Messeages
              </a>
              <a
                href="#"
                className="drop-shadow-xl

text-md text-white font-semibold hover:text-yellow-300 px-2 py-2 hover:shadow-2xl hover:bg-gray-800"
              >
                Order History
              </a>
              <a
                href="#"
                className="drop-shadow-xl

text-md text-white font-semibold hover:text-yellow-300 px-2 py-2 hover:shadow-2xl hover:bg-gray-800"
              >
                Sign In
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
