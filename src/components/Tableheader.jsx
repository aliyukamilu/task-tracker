import React, { useState } from "react";
import { Table, Button, TextInput, } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { deleteTodos, filterTodo } from "../redux/reducer";

import { AiOutlinePlus } from 'react-icons/ai'
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

  const deleTaskBtn = (id) => {
    if (!userLogged) {
      navigate('/add')
    } else {
      dispatch(
        deleteTodos(id)
      )
    }
  }

  function filterByDate(evt) {
    let Data = props.todos
    let value = evt.target.value
    let newData = Data.filter(itm => itm.date === value)
    setAllTodos(newData)
    
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


      <div className='flex justify-between items-center mb-5'>
        <div>
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
