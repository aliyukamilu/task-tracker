import React, { useState } from "react";
import { Table, Button, TextInput, } from "flowbite-react";

import AddingTaskModal from './AddingTaskModal'
import EditingTaskModal from './EditingTaskModal'
import DeletingTaskModal from './DeletingTaskModal'

import { AiOutlinePlus } from 'react-icons/ai'

const Tableheader = () => {
  const [addTaskModal, setAddTaskModal] = useState(false)
  const [editTaskModal, setEditTaskModal] = useState(false)
  const [deleteTaskModal, setDeleteTaskModal] = useState(false)

  const addTask = () => {
    setAddTaskModal(true)
  }

  const EditTaskBtn = () => {
    setEditTaskModal(true)
  }
  const deleTaskBtn = () => {
    setDeleteTaskModal(true)
  }
  return (
    <div className="allcontain">

      <AddingTaskModal
        addTaskModal={addTaskModal}
        setAddTaskModal={setAddTaskModal} />
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

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Complete pricelist implementation
            </Table.Cell>
            <Table.Cell>
              23rd September 2022 12:33
            </Table.Cell>
            <Table.Cell>Ongoing</Table.Cell>
            <Table.Cell className="flex space-x-2">
              <Button size="xs" onClick={EditTaskBtn}>Edit</Button>
              <Button size="xs" color='failure' onClick={deleTaskBtn}>Delete</Button>
            </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
    </div>
  );
};


export default Tableheader;
