import { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function SideBar({ setActiveList }) {
  const [lists, setLists] = useState([]);
  const { get, loading } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  useEffect(() => {
    get("lists").then((data) => {
      console.log(data.lists);
      setLists(data.lists);
    });
  }, []);
  return (
    <aside className="menu" id="sidebar">
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
