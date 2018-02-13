import 'package:flutter/material.dart';
import 'package:flutter_app/ui/app.dart';


class MyDrawer extends StatefulWidget {
//  final VoidCallback changeTrueComplete;
//  final VoidCallback changeFalseComplete;
  bool complete;

  MyDrawer({
    this.complete,
//    this.changeTrueComplete,
//    this.changeFalseComplete,
  });

  @override
  _MyDrawerState createState() => new _MyDrawerState(this.complete);
}
class _MyDrawerState extends State<MyDrawer> {
  bool complete;

  _MyDrawerState(this.complete);

  void changeFalseComplete(){
    setState((){
      this.complete = false;
    });
  }

  void changeTrueComplete(){
    setState((){
      this.complete = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Drawer(
      child: new ListView(
        children: <Widget>[
          new Container(
            color: Colors.blue,
            child:  new DrawerHeader(
              child: new ListView(
                  children: <Widget>[
                    new Icon(Icons.bookmark, size: 100.0, color: Colors.white,),
                    new Center(child: new Text('todo', style: new TextStyle(fontSize: 25.0),),)
                  ]),
            ),
          ),
          new Column(
            children: <Widget>[
              new ListTile(
                leading: const Icon(Icons.bookmark),
                title: new Text('doing'),
                onTap: (){
                  changeFalseComplete();
                  Navigator.push(context, new MaterialPageRoute(
                    settings: const RouteSettings(name: '/home'),
                    builder: (BuildContext context) => new MyHomePage(complete: this.complete,),
                  ));
                },
                selected: true ? !this.complete : true,
              ),
              new ListTile(
                leading: const Icon(Icons.bookmark),
                title: new Text('done'),
                selected: true ? this.complete : false,
                onTap: (){
                  changeTrueComplete();
                  Navigator.push(context, new MaterialPageRoute(
                    settings: const RouteSettings(name: '/home'),
                    builder: (BuildContext context) => new MyHomePage(complete: this.complete,),
                  ));
                },
              )
            ],
          ),
        ],
      ),
    );
  }
}