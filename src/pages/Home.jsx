import SideNews from "../components/SideNews";
import SideSchedule from "../components/SideSchedule";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-black">
        <img
          className="w-1/2"
          src="/src/assets/background/main-bg.png"
          alt="Background JKT48"
        />
        <div className="flex flex-row w-full bg-white">
          <div className="w-1/4 bg-white p-4">
            <SideNews />
            <SideSchedule/>
          </div>
          <div className="w-3/4 bg-white"></div>
        </div>
      </main>
    </>
  );
}
