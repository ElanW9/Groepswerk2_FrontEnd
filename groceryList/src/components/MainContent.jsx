import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import ListItem from "./ListItem";


export default function MainContent({ activeList, mainRefresh }) {
  const [listItems, setListItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [validation, setValidation] = useState("");
  
  
  
  const { get, post } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  useEffect(() => {
    get(`products/${activeList.id}`).then((data) => setListItems(data.products)).catch(err=>console.log(err));
  },[activeList, refresh, mainRefresh]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nItem = e.target[0].value;
    if (!e.target[0].value) {
      return;
    }
    post("product", { name: nItem, list_id: activeList.id }).then((response)=>{
      if(response.status==="error"){
        setValidation(response.errorType);
      }else{
        setValidation("");
      }
      setRefresh(prev=>!prev)
    }).catch(err=>console.log(err));
    
    e.target[0].value = "";
    
  }

  if(!activeList.id > 0) {
    console.log(activeList.name);
    return <h1 className="title is-4">Please select a list</h1>
  } 

  return (
    
    <div>
      <h1 className="title is-4">{activeList.name}</h1>
      {activeList && <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Add new item" />
        <input type="submit" value="GO" className="button is-small is-rounded is-primary" />
      </form>}
      {validation && <p className = "has-text-danger">{validation}</p>}
      
      <div>
        {listItems && listItems.map((listItem) => <ListItem key={listItem.id} name={listItem.name} id={listItem.id} setRefresh={setRefresh}/>)}
        
      </div>
    </div>
  );
}
