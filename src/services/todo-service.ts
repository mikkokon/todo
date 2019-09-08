class Todo {

  todoList: any = '';

  addTodo(event) {
      this.todoList = [...this.todoList, event.target.value ]
      console.log("todoList: ", this.todoList)
  }


  getTodo() {
      return this.todoList;
  }

  deleteTodo(item) {
      this.todoList = this.todoList.filter(item2 => {
        return item2 !== item
      })
  }

}



export const TodoData = new Todo()
