import SideNews from "../components/SideNews";
import SideSchedule from "../components/SideSchedule";

export default function Member() {
  return (
    <>
      <main>
        <div className="flex flex-row w-full bg-white">
          <div className="w-1/4 bg-white p-4">
            <SideNews />
            <SideSchedule />
          </div>
          <div className="w-3/4 bg-white">
            
          </div>
        </div>
      </main>
    </>
  );
}
