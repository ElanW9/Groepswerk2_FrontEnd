import { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function SideBar({ setActiveList, activeList, mainRefresh }) {
  const [lists, setLists] = useState([]);
  const [newList, setNewList] = useState("");
  const [validation, setValidation] = useState("");
  const [refresh, setRefresh] = useState(false);
  const { get, post } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  useEffect(() => {
    get("lists").then((data) => {
      
      setLists(data.lists);
    }).catch(err=>console.log(err));
  },[refresh, mainRefresh]);

  const handleListClick = (id, name) => {
    setActiveList({id, name});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newList) {
      setValidation("Please enter name");
      return;
    }
      post("list", { name: newList }).then((response)=>{
        
        if(response.status==="error"){
          setValidation(response.errorType);
        }
        setRefresh(prev=>!prev)
      }).catch(err=>console.log(err));
      
      setValidation("");
      setNewList("");
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
          
        </div>
      </form>
      {validation && <p className="has-text-danger">{validation}</p>}
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
