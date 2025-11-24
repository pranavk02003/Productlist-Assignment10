const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center">

      {/* Left side - Logo / Title */}
      <h1 className="text-xl font-semibold">DV8 Cart</h1>

      {/* Right side - Menu */}
      <div className="flex gap-6 text-lg">

        <button className="hover:text-gray-300">Best Seller</button>

        <button className="hover:text-gray-300">Cart</button>

        <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">
          Login
        </button>

      </div>

    </div>
  );
};

export default Navbar;