import useFetch from "./useFetch";

export default function Header({activeList}) {
  const {del} = useFetch("https://s11.syntradeveloper.be/src/api/v1/");

  const handleDeleteClick = () => {
    
        del(`list/${activeList}`).catch(err=>console.log(err));
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              {/* <hr className="navbar-divider"> */}
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <button className="button is-danger" onClick={handleDeleteClick}>
            <strong>Delete current list</strong>
          </button>
          
        </div>
      </div>
    </div>
    </nav>
  );
}
