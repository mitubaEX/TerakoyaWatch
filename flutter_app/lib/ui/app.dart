import 'package:flutter/material.dart';
import 'package:flutter_app/ui/todo_list.dart';
import 'package:flutter_app/repository/repository_factory.dart';
import 'package:flutter_app/ui/drawer.dart';
import 'package:flutter_app/ui/create_todo.dart';
import 'package:flutter_app/models/todo.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return new MaterialApp(
      title: 'ToDo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePage createState() => new _MyHomePage();
}


class _MyHomePage extends State<MyHomePage> {
  final TextEditingController _controller = new TextEditingController();
  List<Todo> _todoList = [];

  void _addTodo(String todoName){
    _todoList = new RepositoryFactory()
        .getTodoRepositoryImpl()
        .addTodo(todoName);
    setState((){
      _controller.text = '';
    });
    print(Navigator.defaultRouteName);
  }

  bool _completeCondition  = false;

  @override
  build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('ToDo'),
      ),
      drawer: new MyDrawer(
        complete: _completeCondition,
        changeTrueComplete: (){
          setState((){
            _completeCondition = true;
          });
        },
        changeFalseComplete: (){
          setState((){
            _completeCondition = false;
          });
        },
      ),
      body: new Center(
          child: new TodoList(todoList: _todoList, completeCondition: _completeCondition,),
      ),
      floatingActionButton: new FloatingActionButton(
//        onPressed: () async {
//          await showDialog(
//            context: context,
//            child: new SimpleDialog(
//              title: const Text('Create Todo'),
//              children: <Widget>[
//                new Text('hello'),
//                new Center(
//                  child: new Column(
//                    children: <Widget>[
//                      new ListTile(
//                        leading: const Icon(Icons.bookmark),
//                        title: new TextField(
//                          controller: _controller,
//                          decoration: new InputDecoration(
//                            hintText: "Todo",
//                          ),
//                        ),
//                      ),
//                      new RaisedButton(
//                        color: Colors.blue,
//                        onPressed: () => _addTodo(_controller.text),
//                        textColor: Colors.white,
//                        child: new Text('add'),
//                      ),
//                    ],
//                  ),
//                ),
//              ],
//            ),
//          );
//        },
        onPressed: (){
          Navigator.push(context, new MaterialPageRoute(
            settings: const RouteSettings(name: '/create_todo'),
            builder: (BuildContext context) => new CreateTodo(),
          ));
        },
        tooltip: 'Increment',
        child: new Icon(Icons.add),
      ),
    );
  }
}

