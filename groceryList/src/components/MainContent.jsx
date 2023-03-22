import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import ListItem from "./ListItem";


export default function MainContent({ activeList }) {
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  
  const { get, post } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  useEffect(() => {
    get(`products/${activeList}`).then((data) => setListItems(data.products));
  }, [activeList]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItem = e.target[0].value;
    if (!e.target[0].value) {
      return;
    }
    post("product", { name: newItem, list_id: activeList });
    e.target[0].value = "";
  }

  if(!activeList) {
    return <h1 className="title is-4">Please select a list</h1>
  }

  return (
    
    <div>
      <h1 className="title is-4">{activeList}</h1>
      {activeList && <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Add new item" />
        <input type="submit" value="GO" className="button is-small is-rounded is-primary" />
      </form>}
      
      <div>
        {listItems && listItems.map((listItem) => <ListItem key={listItem.id} name={listItem.name} id={listItem.id}/>)}
        
      </div>
    </div>
  );
}
