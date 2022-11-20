import React, { useState } from 'react'
import { Button, TextInput, Modal, Label } from "flowbite-react";

import { connect, useSelector, useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";
import { useNavigate } from "react-router-dom";

const AddingTaskModal = (props) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [showModal, setShowModal] = useState(true)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const createTask = (e) => {
    e.preventDefault()

    if (todo === "") {
      alert("Input is Empty");
    } else {
      let date = new Date()

      dispatch(
        addTodos({
          id: Math.floor(Math.random() * 1000),
          item: todo,
          date: date.toISOString(),
          status: 'Ongoing',
        })
      );
      navigate('/')
    }
  }

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => navigate('/')}
      >
        <Modal.Header>
          Create New Task
        </Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="task"
                  value="Task"
                />
              </div>
              <TextInput
                id="task"
                type="text"
                onChange={(e) => handleChange(e)}
                defaultValue={todo}
                placeholder=""
                required={true}
              />
            </div>
            <Button type="submit" className='mt-5' onClick={createTask}>
              Create Task
            </Button>
          </form>

          <ul>
            {/* {props.todos.length > 0 &&
            props.todos.map((item) => {
              return <li key={item.id}>{item.item}</li>;
            })} */}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddingTaskModal;