import SideBar from "./components/SideBar";
import "./styles.css";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Header from "./components/Header";

import MainContent from "./components/MainContent";

export default function App() {
  return (
    <Container>
      <SideBar />
      <MainContent />
    </Container>
  );
}
