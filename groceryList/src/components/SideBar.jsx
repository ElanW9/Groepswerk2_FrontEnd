import { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function SideBar({ setActiveList , activeList}) {
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

  const handleListClick = (id) => {

    setActiveList(id);
  };
  return (
    <aside className="menu" id="sidebar">
      <p className="menu-label">Grocery Lists</p>
      <ul className="menu-list">
        {lists &&
          lists.map((listItem) => (
            <li key={listItem.id}>
              <a onClick={() => handleListClick(listItem.id, listItem.name)}>{listItem.name}</a>
            </li>
          ))}
      </ul>
    </aside>
  );
}
