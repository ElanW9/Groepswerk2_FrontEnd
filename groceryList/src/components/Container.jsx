import Header from "./Header";
import Footer from "./Footer";
export default function Container(props) {
  const { children, className, ...rest } = props;
  // const classes = clsx("ui-container", className);
  return (
    <>
      <Header />
      <main>
        <div id="main-content" className="is-flex-direction-row">
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
}
