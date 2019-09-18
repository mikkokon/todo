import { Product } from '../interfaces/interface';
//import { get, set,} from "../helpers/storage";

class Todo {

  todoList: Product[] = [];

  async addTodo(event) {
      this.todoList = [...this.todoList, event ]
      console.log("todoList: ", this.todoList)
      // set('product', this.todoList);
  }


  async getTodo() {
     return this.todoList;
    //  let products = await get('product');
    //  console.log(' get name in settings-data: ', products);
    //  return(products)
  }

  async deleteTodo(item) {
      console.log("item: ", item)
      this.todoList = this.todoList.filter(item2 => {
        return item2.key !== item.key
      })
  }

}



export const TodoData = new Todo()
