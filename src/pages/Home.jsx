export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-black">
        {/* <img
          className="w-1/2"
          src="/src/assets/background/main-bg.png"
          alt="Background JKT48"
        /> */}
        <video className="w-full h-screen" loop muted autoPlay>
          <source
            src="/src/assets/background/main-video.mp4"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
}
