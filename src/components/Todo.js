import React from 'react';

import {ListGroup, Col, Row, Button} from 'react-bootstrap';

// TodoInputコンポーネントからpropsを受け取りTodo関数に渡す
function Todo(props) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Row>
          <Col sm={10}>{props.task}</Col>
          <Col sm={2}>
            <Button variant="outline-danger" onClick={() => props.TodoRemove(props.taskid)}>
              Done
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Todo;
