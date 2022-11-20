import React, { useState } from 'react'
import { Button, TextInput, Modal, Label, Textarea } from "flowbite-react";

import { useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";
import { useNavigate } from "react-router-dom";

const AddingTaskModal = (props) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [details, setDetails] = useState("")
  const [showModal, setShowModal] = useState(true)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleChangeDet = (e) => {
    setDetails(e.target.value)
  }

  const createTask = (e) => {
    e.preventDefault()

    if (todo === "") {
      alert("Input is Empty");
    } else {
      let date = new Date()
      let splitter = date.toISOString().split('T')
      let time = splitter[1].split('.')

      dispatch(
        addTodos({
          id: Math.floor(Math.random() * 1000),
          item: todo,
          details: details,
          date: splitter[0],
          time: time[0],
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

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="details"
                  value="Details"
                />
              </div>
              <Textarea
                id="details"
                type="text"
                onChange={(e) => handleChangeDet(e)}
                defaultValue={details}
                placeholder=""
                required={true}
              />
            </div>
            <Button type="submit" className='mt-5' onClick={createTask}>
              Create Task
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddingTaskModal;