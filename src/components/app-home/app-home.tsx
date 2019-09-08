import { Component, State,  h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  // Tee interface
  @State() todoList: any = [];

  putTodo(event) {
      console.log("event: ", event.target.value)
      this.todoList = [...this.todoList, event.target.value ]
      //this.todoList.push(event.target.value)
      console.log("todoList: ", this.todoList)
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
                <div>
                  {item}
                </div>)}
          </div>

          <ion-item>
                <ion-input
                // this.handleClick() tallentaa merkkijonoa muuttujaan this.message
                // this.enterPressed() tulostaa vain sen hetkisen this.messagen sisällön
               // onInput={event => this.handleClick(event)}
                onKeyPress={event => {
                  if (event.key === "Enter") {
                    this.putTodo(event);
                  }
                }}
                clear-input = {true}
                placeholder="type message...and press enter"
                />
            </ion-item>

      </ion-content>
    ];
  }
}
