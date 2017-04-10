'use strict';
// Task Model

class Task {
  constructor(description, priority, list) {
    this.description = description
    this.priority = priority
    this.list = list
    this.addToList(list)
    this.id = list.tasks.length - 1
  }
  liEl() {
    return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
  }
  addToList(list) {
    list.tasks.unshift(this)
  }
  build() {
    let $target = $(`#list-${this.list.id}`)
    $target.append(this.liEl())
  }
}
