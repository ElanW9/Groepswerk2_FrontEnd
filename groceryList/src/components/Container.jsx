import Header from "./Header";
import Footer from "./Footer";
export default function Container(props) {
  const { children, activeList } = props;
  
  return (
    <>
      <Header activeList={activeList}/>
      <main>
        <div id="main-content" className="is-flex-direction-row">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
