import 'package:flutter_app/models/todo.dart';
import 'package:flutter_app/entity/todo_entity_impl.dart';
import 'package:flutter_app/repository/todo_repository.dart';

class TodoRepositoryImpl implements TodoRepository{
  TodoEntityImpl todoEntityImpl = new TodoEntityImpl();

  List<Todo> findAll() {
    return todoEntityImpl.findAll();
  }

  List<Todo> findGivenComleteCondition(bool completeCondition){
    return todoEntityImpl.findAll().where((i) => i.comp == completeCondition).toList();
  }

  List<Todo> addTodo(String todoName) {
    return todoEntityImpl.addTodo(todoName);
  }

  List<Todo> completeTodo(int id) {
    return todoEntityImpl.completeTodo(id);
  }
}
