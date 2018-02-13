import 'package:flutter/material.dart';
import 'package:flutter_app/models/todo.dart';
import 'package:flutter_app/repository/repository_factory.dart';

class TodoItem extends StatefulWidget {
  final Todo todo;
  final bool completeCondition;
  VoidCallback onTap;
  TodoItem({Key key, this.todo, this.completeCondition, this.onTap}):super(key: key);
  @override
  _TodoItemState createState() => new _TodoItemState(completeCondition, onTap);
}

class _TodoItemState extends State<TodoItem> {
  final bool completeCondition;
  VoidCallback onTap;

  _TodoItemState(this.completeCondition, this.onTap);

  @override
  void initState(){
    super.initState();
  }

  TextDecoration getTextDecoration(bool comp){
    if(comp)
      return TextDecoration.lineThrough;
    return TextDecoration.none;
  }

  String getSnackBarText(bool comp){
    if(comp)
      return 'undo doing!';
    return 'doing!!!!!!';
  }

  @override
  Widget build(BuildContext context){
    print('completeCondition:' + completeCondition.toString());
    return new Row(
      children: <Widget>[
        new Checkbox(
          value: widget.todo.comp,
          onChanged: (bool newValue){
            setState((){
              widget.todo.comp = newValue;
            });
            new RepositoryFactory()
                .getTodoRepositoryImpl()
                .completeTodo(widget.todo.id);
            Scaffold.of(context).showSnackBar(
              new SnackBar(
                  content: new Text(getSnackBarText(completeCondition)),
              ),
            );
            onTap();
          },
        ),
        new Text(
          widget.todo.todoName,
          style: new TextStyle(
              fontSize: 16.0,
              decoration: getTextDecoration(widget.todo.comp)),
        ),
      ],
    );
  }
}