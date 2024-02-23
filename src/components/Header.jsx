import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between items-center bg-black h-16 text-red-600 font-dosis font-semibold w-full sticky top-0">
      <Link to="/jkt48/home" className="w-44 text-3xl text-center">
        <span className="cursor-pointer font-abel">JKT48</span>
      </Link>
      <div className="flex gap-8">
        <Link
          to="/jkt48/schedule"
          className="cursor-pointer border-b-2 border-black hover:border-red-600 "
        >
          SCHEDULE
        </Link>
        <Link
          to="/jkt48/member"
          className="cursor-pointer border-b-2 border-black hover:border-red-600"
        >
          MEMBER
        </Link>
        <Link
          to="/jkt48/theater"
          className="cursor-pointer border-b-2 border-black hover:border-red-600"
        >
          THEATER
        </Link>
        <Link
          to="/jkt48/merchandise"
          className="cursor-pointer border-b-2 border-black hover:border-red-600"
        >
          MERCHANDISE
        </Link>
      </div>
      <div className="flex gap-4 w-44 justify-center items-center">
        <div>SIGN IN</div>
        <div className="bg-red-600 rounded-xl text-white px-5 py-1 cursor-pointer">
          SIGN UP
        </div>
      </div>
    </nav>
  );
}
