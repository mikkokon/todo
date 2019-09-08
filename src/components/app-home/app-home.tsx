import { Component, State,  h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  // SIIRRÄ HYÖDYLLISET JUTUT TOOL-KITTIIN  !!!

  // Tee interface
  @State() todoList: any = [];
  index: number = 0;


  add(event) {
      console.log("event: ", event.target.value)
      this.todoList = [...this.todoList, event.target.value ]
      console.log("todoList: ", this.todoList)
  }

  delete(item) {
      let itemRemovedArr = this.todoList.filter(item2 => {
         return item2 !== item
      })
    this.todoList = itemRemovedArr;

      console.log("todoList after: ", itemRemovedArr)
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
             {this.todoList.map((item) =>
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
