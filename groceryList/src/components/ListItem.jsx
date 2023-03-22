import useFetch from "./useFetch";

export default function ListItem({ name, id }) {
  const { del } = useFetch(
    "https://s11.syntradeveloper.be/src/api/v1/"
  );
  const onDeleteClick = () => {
    console.log('delete');
    del(`product/${id}`);
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
