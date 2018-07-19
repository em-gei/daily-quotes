import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  todoInput: string;
  todoArray: string[];
  checkedArray: boolean[];
  showDeleteSelected: boolean;

  constructor() {
    this.title = 'What i have to do?';
    this.todoInput = '';
    this.todoArray = new Array();
    this.checkedArray = new Array();
    this.showDeleteSelected = false;
  }

  /**
   * @function
   * @name addTodo
   * @description Push the todoInput in the array, set the checkedArray and reset todoInput value
   */
  addTodo() {
    this.todoArray.push(this.todoInput);
    this.checkedArray.push(false);
    this.resetTodoInput();
  }

  /**
   * @function
   * @name deleteTodo
   * @description Delete index element of todoArray and the checkedArray element
   * @param {number} index Index of todoArray to delete
   */
  deleteTodo(index: number) {
    this.todoArray.splice(index, 1);
    this.checkedArray.splice(index, 1);
  }

  /**
   * @function
   * @name deleteSingleTodo
   * @description Invoke deleteTodo() and the checkDeleteSelectedVisibility()
   * @param {number} index Index of todoArray to delete
   */
  deleteSingleTodo(index: number) {
    this.deleteTodo(index);
    this.checkDeleteSelectedVisibility();
  }

  /**
 * @function
 * @name deleteSelectedTodo
 * @description Delete checked element of todoArray and the respective checkedArray element
 * @param {number} index Index of todoArray to delete
 */
  deleteSelectedTodo() {
    let checkedIndex = this.checkedArray.length - 1;
    while (checkedIndex >= 0) {
      if (this.checkedArray[checkedIndex]) {
        this.todoArray.splice(checkedIndex, 1);
        this.checkedArray.splice(checkedIndex, 1);
      }
      checkedIndex--;
    }
  }

  /**
   * @function
   * @name checkDeleteSelectedVisibility
   * @description On checkbox button click check the visibility for deleteSelectedTodo button
   */
  checkDeleteSelectedVisibility() {
    for (const flag of this.checkedArray) {
      if (flag) {
        return this.showDeleteSelected = true;
      }
    }
    return this.showDeleteSelected = false;
  }


  /**
   * @function
   * @name resetTodoInput
   * @description Reset the todoInput value
   */
  resetTodoInput() {
    this.todoInput = '';
  }
}
