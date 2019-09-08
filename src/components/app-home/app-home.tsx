import { Component, State,  h } from '@stencil/core';

import { TodoData } from '../../services/todo-service';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  // SIIRRÄ HYÖDYLLISET JUTUT TOOL-KITTIIN  !!!

  // Tee interface
  @State() showToDo: any = [];
  index: number = 0;

  refresh() {
    this.showToDo = TodoData.getTodo()
  }


  add(event) {
      TodoData.addTodo(event);
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
                <div onClick={() => this.delete(item)}>{item}</div>)}
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
