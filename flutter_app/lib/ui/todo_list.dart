import 'package:flutter/material.dart';
import 'package:flutter_app/models/todo.dart';
import 'package:flutter_app/ui/todo_item.dart';
import 'package:flutter_app/repository/repository_factory.dart';

class TodoList extends StatefulWidget {
  bool completeCondition;
  List<Todo> todoList;

  TodoList({
    this.todoList,
    this.completeCondition,
  });

  @override
  _TodoListState createState() => new _TodoListState(todoList, completeCondition);
}

class _TodoListState extends State<TodoList>{

  List<Todo> todoList;

  bool completeCondition;

  _TodoListState(
      this.todoList,
      this.completeCondition,
      );

  @override
  void initState() {
    setState(() {
      todoList = new RepositoryFactory()
          .getTodoRepositoryImpl()
          .findGivenComleteCondition(completeCondition);
    });
  }

  @override
  Widget build(BuildContext context) {
    if(todoList.length == 0){
      return new Center(
        child: new Text('No Todo'),
      );
    }
    return new ListView.builder(
      itemBuilder: (BuildContext, int index) => new TodoItem(
        todo: todoList[index],
        completeCondition: completeCondition,
      ),
      itemCount: todoList.length,
    );
  }
}
