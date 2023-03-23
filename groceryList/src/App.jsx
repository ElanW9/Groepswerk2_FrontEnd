import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import "./styles.css";

import Container from "./components/Container";


import MainContent from "./components/MainContent";

export default function App() {
  const [activeList, setActiveList] = useState({id: 0, name: ""});
  const [mainRefresh, setMainRefresh] = useState(false);

  return (
    <Container activeList={activeList} setMainRefresh={setMainRefresh} setActiveList={setActiveList}>
      <SideBar setActiveList={setActiveList} activeList={activeList} mainRefresh={mainRefresh}/>
      <MainContent activeList={activeList} mainRefresh={mainRefresh}/>
    </Container>
  );
}
