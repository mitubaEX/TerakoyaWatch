import 'package:flutter_app/models/todo.dart';

abstract class TodoEntity {
  List<Todo> findAll();

  List<Todo> addTodo(String todoName);

  List<Todo> completeTodo(int id);

//  List<Todo> find(int id);
//  List<Todo> findByIds(List<Todo> id);
}