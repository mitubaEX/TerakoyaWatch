import 'package:flutter/material.dart';


class MyDrawer extends StatelessWidget {
  final VoidCallback changeTrueComplete;
  final VoidCallback changeFalseComplete;
  bool complete;

  MyDrawer({
    this.complete,
    this.changeTrueComplete,
    this.changeFalseComplete,
  });

  @override
  Widget build(BuildContext context) {
    return new Drawer(
      child: new ListView(
        children: <Widget>[
          new Container(
            color: Colors.blue,
            child:  new DrawerHeader(
              child: new Text('todo'),
            ),
          ),
          new Column(
            children: <Widget>[
              new ListTile(
                leading: const Icon(Icons.bookmark),
                title: new Text('do'),
                selected: true ? !this.complete : true,
                onTap: (){
                  Navigator.of(context).pop();
                  changeFalseComplete();
                },
              ),
              new ListTile(
                leading: const Icon(Icons.bookmark),
                title: new Text('done'),
                selected: true ? this.complete : false,
                onTap: (){
                  Navigator.of(context).pop();
                  changeTrueComplete();
                },
              )
            ],
          ),
        ],
      ),
    );
  }
}