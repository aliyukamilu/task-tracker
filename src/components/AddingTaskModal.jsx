import React, { useState } from 'react'
import {Button, TextInput, Modal, Label } from "flowbite-react";

const AddingTaskModal = ({ addTaskModal, setAddTaskModal }) => {
  return (
    <Modal
      show={addTaskModal}
      onClose={() => setAddTaskModal(false)}
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
              placeholder=""
              required={true}
            />
          </div>
          <Button type="submit" className='mt-5'>
            Create Task
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  )
}


export default AddingTaskModal