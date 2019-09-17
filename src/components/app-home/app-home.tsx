import { Component, State,  h } from '@stencil/core';
import { TodoData } from '../../services/todo-service';
import { Product } from '../../interfaces/interface';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {


  // Tee interface
  @State() showToDo: Product[] = [{key:0, value:null}];
  index: number = 0;

  private i = 0;

  // Get updated array from service
  refresh() {
    this.showToDo = TodoData.getTodo()
  }


  add(event) {
      this.i++;
      let addedItem = {key: this.i, value: event.target.value }
      TodoData.addTodo(addedItem);
      this.refresh();
  }


  delete(item) {
      TodoData.deleteTodo(item)
      this.refresh();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>ToDo</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
          <div>
             {this.showToDo.map((item) =>
                <div onClick={() => this.delete(item)}>{item.value}</div>)}
          </div>

          <ion-item>
            <ion-input
                onKeyPress={event => {
                  if (event.key === "Enter") {
                    this.add(event);
                  }
                }}
                clear-input = {true}
                placeholder="type todo .. and press enter "
            />
          </ion-item>
      </ion-content>
    ];
  }
}
