// 必要なリソース追加する
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';

class MainContainer extends Component {
  render() {
    // データソース定義
    let todos = [
      { id: 1, title: "create some actions" },
      { id: 2, title: "create some reducer" },
      { id: 3, title: "create store" }
    ];
    // この部分はビューをレンダーです。
    return (
      <View style={styles.container}>
        <FlatList data={todos}
                  renderItem={this._renderItems}
                  keyExtractor={(item, index) => index} />
      </View>
    );
  }

　// このメソッドでは一覧の各アイテムをレンダーするです。
  _renderItems({ item }) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }
}

// ビューのスタイル修正
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0
  }
});

// このContainerを利用できるためエクスポートします
export default MainContainer;
