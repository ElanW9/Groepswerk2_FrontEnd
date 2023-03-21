export default function ListItem() {
  return (
    <div className="list-item is-flex-direction-row">
      <p>Some item</p>
      <div className="btns is-flex-direction-row right">
        <button class="button is-danger is-outlined">
          <span>Delete</span>
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
        <button className="button">check</button>
      </div>
    </div>
  );
}
