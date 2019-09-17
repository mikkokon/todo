import { Product } from '../interfaces/interface';

class Todo {

  todoList: Product[] = [];

  addTodo(event) {
      this.todoList = [...this.todoList, event ]
      console.log("todoList: ", this.todoList)
  }


  getTodo() {
      return this.todoList;
  }

  deleteTodo(item) {
      console.log("item: ", item)
      this.todoList = this.todoList.filter(item2 => {
        return item2.key !== item.key
      })
  }

}



export const TodoData = new Todo()
