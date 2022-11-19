import React from 'react'
import { Button, TextInput, Modal, Label, Select } from "flowbite-react";

const EditingTaskModal = ({ editTaskModal, setEditTaskModal }) => {
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
              id="task"
              type="text"
              defaultValue="Pricelist Implementation"
              placeholder=""
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
              required={true}>
              <option>Ongoing</option>
              <option>Done</option>
            </Select>
          </div>
          <Button type="submit" className='mt-5'>
            Edit Task
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default EditingTaskModal