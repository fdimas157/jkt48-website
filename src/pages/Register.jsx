import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="w-full fixed">
        <img src="/src/assets/background/register-bg.png" alt="register-bg" />
      </div>
      <main className="w-full h-screen absolute top-0 left-0 flex flex-row">
        <div className="w-4/12 h-screen p-4">
          <Link
            to={"/jkt48/login"}
            className="h-8 flex flex-row text-red-600 justify-center items-center gap-2 w-20 rounded-lg cursor-pointer"
          >
            <LogIn className="" />
            <div className="font-outfit font-bold">Login</div>
          </Link>
        </div>
        <div className="w-8/12 h-screen flex flex-col p-8">
          <div className="font-outfit font-bold text-4xl text-red-600 py-4">
            Daftar Akun Baru
          </div>
          <form
            action=""
            className="bg-gray-400/30 w-full h-full rounded-3xl"
          ></form>
        </div>
      </main>
    </>
  );
}
