import 'package:flutter/material.dart';
import 'package:flutter_app/models/todo.dart';
import 'package:flutter_app/ui/todo_item.dart';
import 'package:flutter_app/repository/repository_factory.dart';

class TodoList extends StatefulWidget {
  @override
  _TodoListState createState() => new _TodoListState();
}

class _TodoListState extends State<TodoList> {
  List<Todo> _todoList;

  @override
  void initState() {
    new RepositoryFactory().getTodoRepositoryImpl().addTodo('test');
    setState(() {
      _todoList = new RepositoryFactory().getTodoRepositoryImpl().findAll();
    });
  }

  void _addTodo(String todoName) {
    setState(() {
      _todoList = new RepositoryFactory().getTodoRepositoryImpl().addTodo(todoName);
    });
  }

  @override
  Widget build(BuildContext context) {
    return new ListView.builder(
      itemBuilder: (BuildContext, int index) => new TodoItem(todo: _todoList[index]),
      itemCount: _todoList.length,
    );
  }
}
