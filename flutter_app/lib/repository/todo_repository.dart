import 'package:flutter_app/models/todo.dart';

abstract class TodoRepository {
  List<Todo> findAll();

  List<Todo> findGivenComleteCondition(bool completeCondition);

  List<Todo> addTodo(String todoName);

  List<Todo> completeTodo(int id);
}