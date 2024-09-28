import './index.css'

const TodoItem = props => {
  const {item, deleteTodo} = props
  const onDelete = () => {
    deleteTodo(item.id)
  }
  return (
    <li className="list">
      <p className="todo">{item.title}</p>
      <button type="button" onClick={onDelete} className="btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
