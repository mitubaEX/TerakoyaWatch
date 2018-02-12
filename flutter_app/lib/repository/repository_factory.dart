import 'package:flutter_app/repository/todo_repository_impl.dart';
import 'package:flutter_app/repository/todo_repository.dart';

class RepositoryFactory {
  static final RepositoryFactory _singleton = new RepositoryFactory._internal();

  factory RepositoryFactory(){
    return _singleton;
  }

  TodoRepository _todoRepository;

  RepositoryFactory._internal(){
    _todoRepository = new TodoRepositoryImpl();
  }

  TodoRepository getTodoRepositoryImpl(){
    return _todoRepository;
  }

}
