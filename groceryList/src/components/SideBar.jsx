import { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function SideBar() {
  const [lists, setLists] = useState([]);
  const [newList, setNewList] = useState("");
  const [validation, setValidation] = useState("");
  const { get, post, loading } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  useEffect(() => {
    get("lists").then((data) => {
      console.log(data.lists);
      setLists(data.lists);
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newList) {
      setValidation("Please enter name");
      return;
    }
    (() => {
      console.log("test");
      post("list", { name: newList });
    })();
  };
  return (
    <aside className="menu" id="sidebar">
      <form onSubmit={handleFormSubmit}>
        <div className="control is-flex flex-direction-row">
          <input
            id="newList"
            value={newList}
            onChange={(e) => setNewList(e.target.value)}
            type="text"
            placeholder="Add new list"
          />

          <input
            type="submit"
            value="GO"
            className=" button is-small is-rounded is-primary"
          />
          {/* <strong>Go</strong>
          </input> */}
        </div>
      </form>
      {validation && <p className="has-text-danger">{validation}</p>}
      <p className="menu-label">Grocery Lists</p>
      <ul className="menu-list">
        {lists &&
          lists.map((listItem) => (
            <li key={listItem.id}>
              <a>{listItem.name}</a>
            </li>
          ))}
      </ul>
    </aside>
  );
}
