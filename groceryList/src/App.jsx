import { useState } from "react";
import SideBar from "./components/SideBar";
import "./styles.css";

import Container from "./components/Container";


import MainContent from "./components/MainContent";

export default function App() {
  const [activeList, setActiveList] = useState(null);
  return (
    <Container>
      <SideBar setActiveList={setActiveList} activeList={activeList} />
      <MainContent activeList={activeList} />
    </Container>
  );
}
