import { Product } from '../interfaces/interface';
import { get, set,} from "../helpers/storage";

class Todo {

  todoList: Product[] = [];


  firstRefresh(obj){
      this.todoList = obj;
  }

  async addTodo(obj) {
      this.todoList = [...this.todoList, obj ]
      set('product', this.todoList);
  }

  async getTodo() {
      let products = await get('product');
      return(products)
  }

  async deleteTodo(item) {
      this.todoList = this.todoList.filter(item2 => {
        return item2.key !== item.key
      })
      set('product', this.todoList);
  }

}



export const TodoData = new Todo()
