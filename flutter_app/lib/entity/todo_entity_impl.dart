import 'package:flutter_app/models/todo.dart';
import 'package:flutter_app/entity/todo_entity.dart';

class TodoEntityImpl implements TodoEntity {
  List<Todo> todoList = [];

  @override
  List<Todo> findAll(){
    return todoList;
  }

  @override
  List<Todo> addTodo(String todoName){
    todoList.add(new Todo(todoList.length, todoName, false));
    return todoList;
  }

  @override
  List<Todo> completeTodo(int id){
    for(var i = 0; i < todoList.length; i++){
      if(todoList[i].id == id)
        todoList[i].comp != todoList[i].comp;
    }
    return todoList;
  }
}
