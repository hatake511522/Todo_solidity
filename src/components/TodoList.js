import React, { Component } from 'react';

import { Card } from 'react-bootstrap';

import Todo from './Todo';
import TodoContract from '../contracts/Todo_ABI';
import web3 from "../contracts/web3";

class TodoList extends Component {

  async TodoRemove(event) {
    try {
      const accounts = await web3.eth.getAccounts();

      //コントラクトのTodoRemoveを呼び出す
      await TodoContract.methods.TodoRemove(event).send({
        from: accounts[0]
      });
      window.location.reload();
    } catch (err) {

    }
  }

  // TodoInputコンポーネントから受け取ったpropsの値をmapで展開
  render() {
    const list = this.props.todolist.map((todo, i) => {
      if(todo.flag) {
        // .mapで展開された数だけTodoコンポーネントを呼び出し
        // Todo の状態がtrueの時のみ処理を通す
        return <Todo {...todo} key={i} TodoRemove = {this.TodoRemove.bind(this)}/>;
      }
    });

    return (
      <div>
        <Card>
          <Card.Header>Todo List</Card.Header>
          {list}
        </Card>
      </div>
    );
  }
}

export default TodoList;
