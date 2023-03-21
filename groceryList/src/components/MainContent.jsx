import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import ListItem from "./ListItem";

export default function MainContent({ activeList }) {
  const [listItems, setListItems] = useState([]);
  const { get, loading } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  useEffect(() => {
    get(`products/4`).then((data) => console.log(data.products));
  }, [activeList]);
  return (
    <div>
      <h1 className="title is-4">Test</h1>
      <div>
        <ListItem name="test" />
        <ListItem />
      </div>
    </div>
  );
}
