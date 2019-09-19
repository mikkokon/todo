import { Component, State,  h } from '@stencil/core';
import { TodoData } from '../../services/todo-service';
import { Product } from '../../interfaces/interface';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {


  @State() showToDo: Product[] = [{key:0, value:null}];

  index: number = 0;

  private i = 0;

  async componentDidLoad() {
    this.showToDo = await TodoData.getTodo();
    if (this.showToDo) {
      TodoData.firstRefresh(this.showToDo);
    }
    this.refresh();
  }


  // Get updated array from service
  async refresh() {
    this.showToDo = await TodoData.getTodo();
  }


  add(event) {
      let addedItem = {key: this.i++, value: event.target.value }
      TodoData.addTodo(addedItem);
      this.refresh();
  }


  async delete(item) {
      await TodoData.deleteTodo(item)
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
           <ion-list>
              {this.showToDo.map((item) =>
                <ion-item-sliding>
                    <ion-item>{item.value}</ion-item>
                    <ion-item-options side="end">
                       <ion-item-option color="danger" onClick={() => this.delete(item)}>DELETE</ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
              )}
          </ion-list>
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
