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
      home: new MyHomePage(false),
    );
  }
}

class MyHomePage extends StatefulWidget {
  bool complete;
  MyHomePage(this.complete);

  @override
  _MyHomePage createState() => new _MyHomePage(this.complete);
}


class _MyHomePage extends State<MyHomePage> {
  bool complete;
  final TextEditingController _controller = new TextEditingController();
  List<Todo> _todoList = [];

  _MyHomePage(this.complete);

  void _addTodo(String todoName){
    this._todoList = new RepositoryFactory()
        .getTodoRepositoryImpl()
        .addTodo(todoName);
    setState((){
      _controller.text = '';
    });
    print(Navigator.defaultRouteName);
  }

  @override
  initState(){
    setState((){
      this._todoList = new RepositoryFactory()
          .getTodoRepositoryImpl()
          .findGivenComleteCondition(this.complete);
    });
    print('todolist');
    print(this._todoList);
    print(this.complete);
  }


  @override
  build(BuildContext context){
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('ToDo'),
      ),
      drawer: new MyDrawer(
        complete: this.complete,
//        changeTrueComplete: (){
//          setState((){
//            this.complete = true;
//          });
//        },
//        changeFalseComplete: (){
//          setState((){
//            this.complete = false;
//          });
//        },
      ),
      body: new Center(
          child: new TodoList(todoList: this._todoList, completeCondition: this.complete,),
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

