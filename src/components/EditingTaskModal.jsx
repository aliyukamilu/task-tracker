import React, { useState } from 'react'
import { Button, TextInput, Modal, Label, Select } from "flowbite-react";
import { connect, useDispatch } from "react-redux";
import { updateTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const EditingTaskModal = ({ editTaskModal, setEditTaskModal, todoName, taskId, todos }) => {

  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(todoName)
  const [taskStatus, setTaskStatus] = useState('Ongoing')
  const [taskDetails, setTaskDetails] = useState('')

  const EditTask = () => {
    let id = taskId
    dispatch(
      updateTodos({ id, item: taskName, status: taskStatus, details: taskDetails })
    )
    setEditTaskModal(false)
    sessionStorage.setItem('todoData', JSON.stringify(todos))
  }

  function handleChangeName(evt) {
    setTaskName(evt.target.value)
  }
  function handleChangeStatus(evt) {
    setTaskStatus(evt.target.value)
  }
  function handleChangeDet(evt) {
    setTaskDetails(evt.target.value)
  }
  return (
    <Modal
      show={editTaskModal}
      onClose={() => setEditTaskModal(false)}
    >
      <Modal.Header>
        Edit Task
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
              id="taskName"
              type="text"
              onChange={handleChangeName}
              defaultValue={taskName}
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
            <TextInput
              id="taskDetails"
              type="text"
              onChange={handleChangeDet}
              defaultValue={taskDetails}
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="status"
                value="Status"
              />
            </div>
            <Select
              id="status"
              onChange={handleChangeStatus}
              required={true}
            >
              <option>Ongoing</option>
              <option>Done</option>
            </Select>
          </div>
          <Button onClick={EditTask} className='mt-5'>
            Edit Task
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditingTaskModal)