import { useState } from "react";
import SideBar from "./components/SideBar";
import "./styles.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Header from "./components/Header";

import MainContent from "./components/MainContent";

export default function App() {
  const [activeList, setActiveList] = useState(4);
  return (
    <Container>
      <SideBar setActiveList={setActiveList} />
      <MainContent activeList={activeList} />
    </Container>
  );
}
