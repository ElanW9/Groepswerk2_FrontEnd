import useFetch from "./useFetch";

export default function ListItem({ name, id , setRefresh}) {
  const { del } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  const onDeleteClick = () => {
    
    del(`product/${id}`).then(()=>{setRefresh(prev=>!prev)}).catch(err=>console.log(err));
  };
  return (
    <div className="list-item is-flex-direction-row">
      <p>{name}</p>
      <div className=" is-flex-direction-row right">
        <button onClick = {onDeleteClick} className="button is-danger is-outlined is-small is-rounded">
          Delete
        </button>
        
      </div>
    </div>
  );
}
