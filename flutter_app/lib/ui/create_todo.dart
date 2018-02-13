import 'package:flutter/material.dart';
import 'package:flutter_app/repository/repository_factory.dart';
import 'package:flutter_app/ui/app.dart';

class CreateTodo extends StatefulWidget {
  @override
  _CreateTodoState createState() => new _CreateTodoState();
}

class _CreateTodoState extends State<CreateTodo> {
  final TextEditingController _controller = new TextEditingController();

  void _addTodo(String todoName){
    new RepositoryFactory()
        .getTodoRepositoryImpl()
        .addTodo(todoName);
    Navigator.push(context, new MaterialPageRoute(
      settings: const RouteSettings(name: '/home'),
      builder: (BuildContext context) => new App(),
    ));
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Create ToDo'),
      ),
      body: new Center(
        child: new Column(
          children: <Widget>[
            new ListTile(
              leading: const Icon(Icons.bookmark),
              title: new TextField(
                controller: _controller,
                decoration: new InputDecoration(
                  hintText: "Todo",
                ),
              ),
            ),
            new RaisedButton(
              color: Colors.blue,
              onPressed: () => _addTodo(_controller.text),
              textColor: Colors.white,
              child: new Text('add'),
            ),
          ],
        ),
      ),
    );
  }
}