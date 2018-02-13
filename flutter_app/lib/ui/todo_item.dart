import 'package:flutter/material.dart';
import 'package:flutter_app/models/todo.dart';

class TodoItem extends StatefulWidget {
  final Todo todo;
  final bool completeCondition;
  TodoItem({Key key, this.todo, this.completeCondition}):super(key: key);
  @override
  _TodoItemState createState() => new _TodoItemState(completeCondition);
}

class _TodoItemState extends State<TodoItem> {
  final bool completeCondition;

  _TodoItemState(this.completeCondition);

  @override
  void initState(){
    super.initState();
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
//            Navigator.push(context, new MaterialPageRoute(
//              settings: const RouteSettings(name: '/home'),
//              builder: (BuildContext context) => new MyHomePage(),
//            ));
          },
        ),
        new Text(widget.todo.id.toString()),
        new Text(':'),
        new Text(widget.todo.todoName),
        new Text(':'),
        new Text(widget.todo.comp.toString()),
      ],
    );
  }
}