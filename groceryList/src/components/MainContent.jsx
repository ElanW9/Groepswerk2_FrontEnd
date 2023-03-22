import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import ListItem from "./ListItem";

export default function MainContent({ activeList }) {
  const [listItems, setListItems] = useState([]);
  
  const { get, loading } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  useEffect(() => {
    get(`products/${activeList}`).then((data) => setListItems(data.products));
  }, [activeList]);
  return (
    <div>
      <h1 className="title is-4">{activeList}</h1>
      <div>
        {listItems && listItems.map((listItem) => <ListItem key={listItem.id} name={listItem.name} />)}
        
      </div>
    </div>
  );
}
