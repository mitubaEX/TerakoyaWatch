import 'package:flutter/material.dart';
import 'package:flutter_app/ui/app.dart';

class MyDrawer extends StatefulWidget {
  bool complete;

  MyDrawer({
    this.complete,
  });

  @override
  _MyDrawerState createState() => new _MyDrawerState(this.complete);
}
class _MyDrawerState extends State<MyDrawer> {
  bool complete;

  _MyDrawerState(this.complete);

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
                  setState((){
                    this.complete = false;
                  });
                  Navigator.push(context, new MaterialPageRoute(
                    settings: const RouteSettings(name: '/home'),
                    builder: (BuildContext context) => new MyHomePage(complete: this.complete,),
                  ));
                },
                selected: !this.complete,
              ),
              new ListTile(
                leading: const Icon(Icons.bookmark),
                title: new Text('done'),
                selected: this.complete,
                onTap: (){
                  setState((){
                    this.complete = true;
                  });
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