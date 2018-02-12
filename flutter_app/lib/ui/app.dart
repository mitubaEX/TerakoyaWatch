import 'package:flutter/material.dart';
import 'package:flutter_app/ui/todo_list.dart';

class App extends StatelessWidget {
  @override
  build(BuildContext context){
    return new MaterialApp(
      title: 'ToDo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new AppHome(),
    );
  }
}

class AppHome extends StatelessWidget {
  int num = 0;

  @override
  build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('ToDo'),
      ),
      body: new Center(
        child: new TodoList(),
      ),
      floatingActionButton: new FloatingActionButton(
        onPressed: null,
        tooltip: 'Increment',
        child: new Icon(Icons.add),
      ),
    );
  }
}

