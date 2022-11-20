import React, { useState } from "react";
import { Table, Button, TextInput, } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import EditingTaskModal from './EditingTaskModal'
import DeletingTaskModal from './DeletingTaskModal'

import { AiOutlinePlus } from 'react-icons/ai'
import { connect } from "react-redux";

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

const Tableheader = (props) => {
  const [editTaskModal, setEditTaskModal] = useState(false)
  const [deleteTaskModal, setDeleteTaskModal] = useState(false)

  const navigate = useNavigate();

  const addTask = () => {
    navigate('/add')
  }
  const EditTaskBtn = () => {
    setEditTaskModal(true)
  }
  const deleTaskBtn = () => {
    setDeleteTaskModal(true)
  }

  return (
    <div className="allcontain pt-[120px]">

      <EditingTaskModal
        editTaskModal={editTaskModal}
        setEditTaskModal={setEditTaskModal}
      />
      <DeletingTaskModal
        deleteTaskModal={deleteTaskModal}
        setDeleteTaskModal={setDeleteTaskModal}
      />

      <div className='flex justify-between items-center mb-5'>
        <div>
          <TextInput
            id="date"
            type="date"
          />
        </div>
        <div className=''>
          <Button onClick={addTask}><AiOutlinePlus className='mr-3' size={20} /> Add Task</Button>
        </div>
      </div>

      <Table>
        <Table.Head>
          <Table.HeadCell>Task</Table.HeadCell>
          <Table.HeadCell>Created</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {props.todos.length > 0 &&
            props.todos.map((item) => {
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.item}
                  </Table.Cell>
                  <Table.Cell>
                    {item.date}
                  </Table.Cell>
                  <Table.Cell>{item.status}</Table.Cell>
                  <Table.Cell className="flex space-x-2">
                    <Button size="xs" onClick={EditTaskBtn}>Edit</Button>
                    <Button size="xs" color='failure' onClick={deleTaskBtn}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              )
            })}


        </Table.Body>
      </Table>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Tableheader);
