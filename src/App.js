import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// react-bootstrap のライブラリを使用する
import { Container, Navbar } from 'react-bootstrap';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList'

import TodoContract from './contracts/Todo_ABI';
import web3 from './contracts/web3';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todolist: []
    }
  }

  //レンダリング前に呼ばれる
  async componentWillMount() {
    //自身のウォレットアドレスを取得する
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);

    const result = await TodoContract.methods.getTodosByOwner(accounts[0]).call();

    await Promise.all(result.map(async number => {
      //コントラクトのtodoを呼び出す
      return await TodoContract.methods.todos(number).call();
    })).then(value => {
      console.log(value);
      //取得したvalueでstateを変更する
      this.setState({todolist: value});
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">TodoApp</Navbar.Brand>
          </Navbar>
          <TodoInput />

          <TodoList todolist={this.state.todolist} />
        </Container>
      </div>
    );
  }
}

// 外部読み込みできるようになる
export default App;
