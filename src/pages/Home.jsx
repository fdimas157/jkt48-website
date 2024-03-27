export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-black">
        <div className="absolute top-14 text-white flex justify-center gap-2 flex-col items-center z-10 h-screen font-outfit font-bold text-5xl pb-8">
          - MELOMPAT LEBIH TINGGI -
          <div className="text-sm font-normal font-dosis">
            Melodi yang Mengikat Hati: Rasakan Kekuatan Musik dan Persahabatan
            dengan JK48
          </div>
        </div>
        <img
          className="w-ful opacity-50"
          src="/src/assets/background/home-bg.jpg"
          alt="Background JKT48"
        />
        {/* <div className="w-full h-16 bg-black flex flex-row p-4 items-center gap-4">
          <div className="w-2/12 bg-red-600 h-full rounded-sm"></div>
          <div className="w-10/12 bg-red-600 h-1  rounded-sm"></div>
        </div> */}
        <div className="w-full bg-black text-white p-4">
          <div className="absolute right-0 w-6/12 h-3/4 p-12 font-outfit flex flex-col justify-center gap-4 text-right">
            <div className="text-4xl font-bold ">
              Tumbuh dan Berkembang Bersama Fans
            </div>
            <div className="text-red-600 font-medium text-sm">
              - JKT48 NEW ERA -
            </div>
            <div className="font-dosis ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eius adipisci voluptate dolor iure architecto
              alias, repudiandae, nihil vel sed beatae magnam. Vel perferendis,
              eveniet nemo incidunt expedita ipsum esse? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illum autem eum tempore sint
              ipsum, architecto porro eveniet quaerat expedita veritatis,
              perferendis neque doloribus? Minus, ducimus harum animi excepturi
              odit consequatur?
            </div>
          </div>
          <img
            src="/src/assets/background/side-home-1.png"
            alt="side-bg"
            className="w-3/4"
          />
        </div><div className="w-full bg-black text-white p-4">
          <div className="absolute left-0 w-6/12 h-3/4 p-12 font-outfit flex flex-col justify-center gap-4 text-right">
            <div className="text-4xl font-bold ">
              Tumbuh dan Berkembang Bersama Fans
            </div>
            <div className="text-red-600 font-medium text-sm">
              - JKT48 NEW ERA -
            </div>
            <div className="font-dosis ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eius adipisci voluptate dolor iure architecto
              alias, repudiandae, nihil vel sed beatae magnam. Vel perferendis,
              eveniet nemo incidunt expedita ipsum esse? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illum autem eum tempore sint
              ipsum, architecto porro eveniet quaerat expedita veritatis,
              perferendis neque doloribus? Minus, ducimus harum animi excepturi
              odit consequatur?
            </div>
          </div>
          <img
            src="/src/assets/background/side-home-2.png"
            alt="side-bg"
            className="w-3/4"
          />
        </div>
      </main>
    </>
  );
}
