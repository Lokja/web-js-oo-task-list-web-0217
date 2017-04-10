'use strict';
// Lists Controller

class ListsController {
  constructor() {
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  }
  removeList() {
    let self = this
    this.$wrapper.on('click', '.destroy-list', function(){ //live event listener
      let listId = parseInt($(this).parents('h2').next('ul').data('id'))
      List.all.splice(listId, 1, null)
      self.$selectListMenu.find('option[value="'+listId+'"]').remove()
      $(this).parents('.list').remove()
    });
  }
  init() {
    let self = this
    this.$addTaskForm.hide()
    this.$addListForm.on('submit', function() {
      // event.preventDefault()
      self.$addTaskForm.show()
      let title = $('#list_title').val()
      let list = new List(title)
      list.build()
    })
    this.removeList()
  }
}
