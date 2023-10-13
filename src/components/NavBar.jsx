const NavBar = () => {
  return (
    <div className="sticky bg-white top-0 w-full flex justify-between z-10 h-16  ps-16 pe-12">
      <span className="pt-3 pb-3">
        <img
          src="https://a2sv.org/logos/logo-blue.png"
          alt="A2sv logo"
          className="h-12"
        />
      </span>
      <div className="flex ">
        <div className="hover:bg-slate-300 pt-5 pb-5 pl-5 pr-5  cursor-pointer">
          <a href="/">Home</a>
        </div>
        <div className="hover:bg-slate-300 pt-5 pb-5 pl-5 pr-5  cursor-pointer">
          <select className="hover:bg-slate-300" id="">
            <option value="">Board Members</option>
            <option value="">Advisors/Mentors</option>
            <option value="">Excutives</option>
            <option value="">Staff</option>
            <option value="">Placements</option>
            <option value="">Groups</option>
          </select>
        </div>
        <div className="hover:bg-slate-300 pt-5 pb-5 pl-5 pr-5  cursor-pointer">
          <a href="/">Success Stories</a>
        </div>
        <div className="hover:bg-slate-300 pt-5 pb-5 pl-5 pr-5  cursor-pointer">
          <a href="/">About Us</a>
        </div>
        <div className="hover:bg-slate-300 pt-5 pb-5 pl-5 pr-5  cursor-pointer">
          <a href="/">Get Involved</a>
        </div>
      </div>
      <div className="pt-3 pb-3">
        <button className="bg-blue-600 text-white  px-5 py-2 rounded-lg hover:bg-blue-700">
          Donate
        </button>
      </div>
    </div>
  );
};

export default NavBar;
