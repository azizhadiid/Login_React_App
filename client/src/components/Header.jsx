function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">BizLand</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
