import React, { Component } from 'react';

import { Card, Form, FormControl, InputGroup, Button } from 'react-bootstrap';

import TodoContract from '../contracts/Todo_ABI';
import web3 from '../contracts/web3';

class TodoInput extends Component {

  // constructor を定義することでコンポーネントの状態を初期化
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  // Todo を追加する関数
  onAddTodo(event) {
    this.setState({task: event.target.value});
  }

  async onTodoCreate(event) {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    //コンストラクトのTodoCreateを呼び出してTodoを追加する
    await TodoContract.methods.TodoCreate(this.state.task).send({
      from:accounts[0]
    });

    //トランザクション完了後ページをリロードする
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Card classNme="mt-3 mb-3">
          <Card.Body>
            <Form onSubmit={this.onTodoCreate.bind(this)}>
              <InputGroup>
                <FormControl name="title" placeholder="Todoを入力してください"　onChange={this.onAddTodo.bind(this)} />
                <InputGroup.Append>
                  <Button type="submit" variant="success">
                    Add
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TodoInput;
