import 'package:flutter/material.dart';
import 'package:flutter_app/models/todo.dart';
import 'package:flutter_app/ui/todo_item.dart';
import 'package:flutter_app/repository/repository_factory.dart';

class TodoList extends StatefulWidget {
  bool completeCondition;
  List<Todo> todoList;
  final RouteObserver<PageRoute> routeObserver = new RouteObserver<PageRoute>();

  TodoList({
    this.todoList,
    this.completeCondition,
  });

  @override
  _TodoListState createState() => new _TodoListState(todoList, completeCondition, routeObserver);
}

class _TodoListState extends State<TodoList> with RouteAware{
  final RouteObserver<PageRoute> routeObserver;

  List<Todo> todoList;

  bool completeCondition;

  _TodoListState(
      this.todoList,
      this.completeCondition,
      this.routeObserver
      );

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    routeObserver.subscribe(this, ModalRoute.of(context));
  }

  @override
  void dispose() {
    routeObserver.unsubscribe(this);
    super.dispose();
  }

  // 上の画面がpopされて、この画面に戻ったときに呼ばれます
  void didPopNext() {
    debugPrint("didPopNext ${runtimeType}");
  }

  // この画面がpushされたときに呼ばれます
  void didPush() {
    debugPrint("didPush ${runtimeType}");
  }

  // この画面がpopされたときに呼ばれます
  void didPop() {
    debugPrint("didPop ${runtimeType}");
  }

  // この画面から新しい画面をpushしたときに呼ばれます
  void didPushNext() {
    debugPrint("didPushNext ${runtimeType}");
  }

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
    return new ListView.builder(
      itemBuilder: (BuildContext, int index) => new TodoItem(
        todo: todoList[index],
        completeCondition: completeCondition,
      ),
      itemCount: todoList.length,
    );
  }
}
