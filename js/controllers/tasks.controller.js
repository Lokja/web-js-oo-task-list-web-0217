'use strict';
// Tasks Controller
class TasksController {
  constructor() {
    this.$addTaskForm = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu = $('#select_list')
    this.$taskPriorityInput = $('#task_priority')
    this.$wrapper = $('#wrapper')
  }
  deleteTask() {
    let self = this
    this.$wrapper.on('click', '.destroy-task', function(){ //live event listener
      let listId = $(this).parents('ul').data('id')
      let taskId = $(this).parent('li').data('id')
      let list = List.all[listId]
      list.tasks.splice(taskId, 1, null)
      $(this).parents('li').remove()
    });
  }
  init() {
    let self = this
    this.$addTaskForm.on('submit', function() {
      // event.preventDefault()
      let listId = self.$selectListMenu.val()
      let description = self.$taskDescriptionInput.val()
      let priority = self.$taskPriorityInput.val()
      let list = List.all[listId]
      let task = new Task(description, priority, list)
      task.build()
    })
    this.deleteTask()
  }
}
