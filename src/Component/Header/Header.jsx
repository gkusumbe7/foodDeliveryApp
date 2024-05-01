import foodImg from "../../assets/food-logo.png"
function Header(){
    return (
        <>
        <div class="fixed top-0 w-full z-10 ">
        <nav class="bg-gradient-to-r from-blue-400 to-black py-4">
            <div class="container mx-auto flex items-center justify-between px-4">
                <div class="flex items-center h-10">
                    <img src={foodImg} alt="logo" className="h-16 rounded-full" />
                </div>
                <div class="md:hidden">
                    <button id="navToggle" class="text-white focus:outline-none">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden md:flex md:items-center gap-2">
                    <a href="#" class="text-white font-semibold hover:text-yellow-200 px-3 py-3 hover:shadow-2xl hover:bg-gray-800">HOME</a>
                    <a href="#" class="text-white font-semibold hover:text-yellow-300 px-3 py-3 hover:shadow-2xl hover:bg-gray-800">SERVICES</a>
                    <a href="#" class="text-white font-semibold hover:text-yellow-300 px-3 py-3 hover:shadow-2xl hover:bg-gray-800">ABOUT US</a>
                    <a href="#" class="text-white font-semibold hover:text-yellow-300 px-3 py-3 hover:shadow-2xl hover:bg-gray-800">FIREBALL PRESENCE</a>
                    <a href="#" class="text-white font-semibold hover:text-yellow-300 px-3 py-3 hover:shadow-2xl hover:bg-gray-800">CAREERS</a>
                    <a href="#" class="text-white font-semibold hover:text-yellow-300 px-3 py-3 hover:shadow-2xl hover:bg-gray-800">CONTACT</a>
                </div>
            </div>
        </nav>
        
        <div id="mobileMenu" class="md:hidden hidden bg-gray-800">
            <a href="#" class="block text-white hover:text-gray-300 px-4 py-2 hover:font-bold hover:bg-gradient-to-r from-violet-600 to-black hover:border hover:border-yellow-500">HOME</a>
            <a href="#" class="block text-white hover:text-gray-300 px-4 py-2 hover:font-bold hover:bg-gradient-to-r from-violet-600 to-black hover:border hover:border-yellow-500">SERVICES</a>
            <a href="#" class="block text-white hover:text-gray-300 px-4 py-2 hover:font-bold hover:bg-gradient-to-r from-violet-600 to-black hover:border hover:border-yellow-500">ABOUT US</a>
            <a href="#" class="block text-white hover:text-gray-300 px-4 py-2 hover:font-bold hover:bg-gradient-to-r from-violet-600 to-black hover:border hover:border-yellow-500">FIREBALL PRESENCE</a>
            <a href="#" class="block text-white hover:text-gray-300 px-4 py-2 hover:font-bold hover:bg-gradient-to-r from-violet-600 to-black hover:border hover:border-yellow-500">CAREERS</a>
            <a href="#" class="block text-white hover:text-gray-300 px-4 py-2 hover:font-bold hover:bg-gradient-to-r from-violet-600 to-black hover:border hover:border-yellow-500">CONTACT</a>
        </div>
      </div>
        </>
    );
}

export default Header;