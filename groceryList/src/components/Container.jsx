import Header from "./Header";
import Footer from "./Footer";
export default function Container(props) {
  const { children, activeList, setMainRefresh, setActiveList } = props;
  
  return (
    <>
      <Header activeList={activeList} setMainRefresh={setMainRefresh} setActiveList={setActiveList}/>
      <main>
        <div id="main-content" className="is-flex-direction-row">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
