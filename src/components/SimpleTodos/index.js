import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodo extends Component {
  state = {
    usersDetailsList: initialTodosList,
  }

  onDeleteTodo = id => {
    const {usersDetailsList} = this.state
    const filteredTodo = usersDetailsList.filter(each => each.id !== id)
    this.setState({
      usersDetailsList: filteredTodo,
    })
  }

  render() {
    const {usersDetailsList} = this.state
    return (
      <div className="bgContainer">
        <div className="todosContainer">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {usersDetailsList.map(eachItem => (
              <TodoItem
                item={eachItem}
                key={eachItem.id}
                deleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
