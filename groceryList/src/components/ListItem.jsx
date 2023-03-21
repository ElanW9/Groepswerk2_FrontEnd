export default function ListItem({ name }) {
  return (
    <div className="list-item is-flex-direction-row">
      <p>{name}</p>
      <div className="btns is-flex-direction-row right">
        <button className="button is-danger is-outlined">
          <span>Delete</span>
          <span className="icon is-small">
            <i className="fas fa-times"></i>
          </span>
        </button>
        <button className="button">check</button>
      </div>
    </div>
  );
}
