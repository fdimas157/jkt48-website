import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const [backgroundHeader, setBackgroundHeader] = useState(true);

  return (
    <>
      <Header backgroundHeader={backgroundHeader} setBackgroundHeader={setBackgroundHeader} />
      <Outlet />
    </>
  );
}
