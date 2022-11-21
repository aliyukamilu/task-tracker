import React, { useState } from "react";
import { Table, Button, TextInput, Label, Modal } from "flowbite-react";

import { useNavigate } from "react-router-dom";
import { deleteTodos, filterTodo } from "../redux/reducer";

import { AiOutlinePlus } from 'react-icons/ai'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'
import { connect, useDispatch } from "react-redux";
import EditingTaskModal from './EditingTaskModal'

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (obj) => dispatch(addTodos(obj)),
//   };
// };

const Tableheader = (props) => {
  const [editTaskModal, setEditTaskModal] = useState(false)
  const [deleteTaskModal, setDeleteTaskModal] = useState(false)
  const [todoName, setTodoName] = useState('')
  const [taskId, setTaskId] = useState(0)
  const [taskDate, setTaskDate] = useState('')
  const [taskDetail, setTaskDetail] = useState('')

  const [allTodos, setAllTodos] = useState(props.todos)

  const userLogged = sessionStorage.getItem('todo_user')

  const navigate = useNavigate();
  const dispatch = useDispatch();



  const addTask = () => {
    navigate('/add')
  }

  const EditTaskBtn = (id, taskname, taskDate, taskDet) => {
    if (!userLogged) {
      navigate('/add')
    } else {
      setTodoName(taskname)
      setTaskId(id)
      setTaskDate(taskDate)
      setTaskDetail(taskDet)
      setEditTaskModal(true)
    }
  }
  function deleTaskBtn(id) {
    if (!userLogged) {
      navigate('/login')
    } else {
      setDeleteTaskModal(true)
      setTaskId(id)
    }

  }
  const deleteTask = () => {
    dispatch(
      deleteTodos(taskId)
    )
    setDeleteTaskModal(false)
  }

  function filterByDate(evt) {
    let Data = props.todos
    let value = evt.target.value
    // let newData = Data.filter(itm => itm.date === value)
    // setAllTodos(newData)
    dispatch(filterTodo(value))
  }

  return (
    <div className="allcontain pt-[120px]">

      <EditingTaskModal
        editTaskModal={editTaskModal}
        setEditTaskModal={setEditTaskModal}
        todoName={todoName}
        taskId={taskId}
        taskDate={taskDate}
        taskDetail={taskDetail}
      />

      <Modal
        show={deleteTaskModal}
        size="md"
        popup={true}
        onClose={() => setDeleteTaskModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={deleteTask}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => setDeleteTaskModal(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className='flex justify-between items-center mb-5'>
        <div className='text-left'>
          <Label
            htmlFor="date"
            value="Filter By date"
          />
          <TextInput
            id="date"
            type="date"
            onChange={filterByDate}
          />
        </div>
        <div className=''>
          <Button onClick={addTask}><AiOutlinePlus className='mr-3' size={20} /> Add Task</Button>
        </div>
      </div>
      <div className='overflow-x-auto md:w-[70vw] w-[90vw]'>
        <Table className='table-auto overflow-scroll w-full'>
          <Table.Head>
            {['Task', 'Date Created', 'Time', 'Details', 'Status', 'Action'].map((ittem, i) => (
              <Table.HeadCell key={i}>{ittem}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {props.todos.length > 0 &&
              props.todos.map((item, i) => {
                return (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.item}
                    </Table.Cell>
                    <Table.Cell>{item.date}</Table.Cell>
                    <Table.Cell>{item.time}</Table.Cell>
                    <Table.Cell>{item.details}</Table.Cell>
                    <Table.Cell>{item.status}</Table.Cell>
                    <Table.Cell className="flex space-x-2">
                      <Button size="xs" onClick={() => EditTaskBtn(item.id, item.item, item.date, item.details)}>Edit</Button>
                      <Button size="xs" color='failure' onClick={() => deleTaskBtn(item.id)}>Delete</Button>
                    </Table.Cell>
                  </Table.Row>
                )
              })}


          </Table.Body>
        </Table>
      </div>
    </div>
  );
};


export default connect(mapStateToProps)(Tableheader);
