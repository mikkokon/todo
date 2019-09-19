import { Product } from '../interfaces/interface';
import { get, set, remove } from "../helpers/storage";

class Todo {

  todoList: Product[] = [];


  firstRefresh(obj){
    this.todoList = obj;
  }

  async addTodo(obj) {
      console.log("obj: ", obj)
      this.todoList = [...this.todoList, obj ]
      set('product', this.todoList);
  }

  async getTodo() {
     //return this.todoList;
     let products = await get('product');
     return(products)
  }

  async deleteTodo(item) {
      console.log('todoList before: ', this.todoList)
      // console.log("item: ", item)
      // this.todoList = this.todoList.filter(item2 => {
      //   return item2.key !== item.key
      // })
      // console.log('todoList after: ', this.todoList)
      await remove('product')
  }

}



export const TodoData = new Todo()
