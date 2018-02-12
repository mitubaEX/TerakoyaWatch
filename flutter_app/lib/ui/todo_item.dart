import 'package:flutter/material.dart';
import 'package:flutter_app/models/todo.dart';

class TodoItem extends StatefulWidget {
  final Todo todo;
  TodoItem({Key key, this.todo}):super(key: key);
  @override
  _TodoItemState createState() => new _TodoItemState();
}

class _TodoItemState extends State<TodoItem> {

  @override
  void initState(){
    super.initState();
  }

  @override
  Widget build(BuildContext context){
    return new Row(
      children: <Widget>[
        new Text(widget.todo.id.toString()),
        new Text(':'),
        new Text(widget.todo.todoName),
        new Text(':'),
        new Text(widget.todo.comp.toString()),
      ],
    );
  }
}