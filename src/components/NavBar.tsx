const NavBar = () => {
  return (
    <nav className="bg-black text-white top-0 z-[99999] sticky text-xl flex px-5 py-8 items-center justify-center space-x-20">
      <div>
        <h1 className="text-2xl font-bold">Rent Cars</h1>
      </div>
      <div>
        <ul className="flex space-x-10">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Fleet</li>
          <li className="cursor-pointer hover:underline">Booking</li>
          <li className="cursor-pointer hover:underline">About Us</li>
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>
      </div>
      <div className="border-2 py-1 px-4 rounded-full border-gray-500">
        <button>Login / Resgiser</button>
      </div>
    </nav>
  );
};

export default NavBar;
