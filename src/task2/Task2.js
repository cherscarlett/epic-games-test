import React from 'react';
import List from './List';
import UserForm from './UserForm';
import axios from 'axios';

import './Task2.sass';

const Task2 = () => {
  const [users, setUsers] = React.useState([]);
  const [showUsers, setShowUsers] = React.useState(false);
  const [showNewUserForm, setShowNewUserForm] = React.useState(false);
  const [needsRefresh, setNeedsRefresh] = React.useState(true);
  const [editingUser, setEditingUser] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const result = await axios('http://localhost:4000/accounts');

      setUsers(result.data);
    }

    if (needsRefresh) fetchData();
    return () => { setNeedsRefresh(false); }
  }, [needsRefresh, setUsers]);

  React.useEffect(() => {
    if (users.length) {
      setShowUsers(true);
    }
  }, [users, setShowUsers]);

  function handleAddUserClick() {
    setEditingUser(null);
    setShowNewUserForm(true);
  };

  function handleClose() {
    setEditingUser(null);
    setShowNewUserForm(false);
  };

  async function addUser(user) {
    const {name, email, birthday} = user;

    const result = await axios.post('http://localhost:4000/accounts', {
      name,
      email,
      birthday
    });

    const {data: {success}} = result;
    
    if (success) setNeedsRefresh(true);
    handleClose();
  }

  async function editUser(user) {
    const {name, email, birthday, id} = user;

    const result = await axios.put(`http://localhost:4000/accounts/${id}`, {
      name,
      email,
      birthday
    });

    const {data: {success}} = result;
    
    if (success) setNeedsRefresh(true);
    handleClose();
  }

  function addOrEditUser(user) {
    if (user.id) {
      editUser(user);
    } else {
      addUser(user);
    }
  }

  async function handleDelete(id) {
    const result = await axios.delete(`http://localhost:4000/accounts/${id}`);

    const {data: {success}} = result;
    
    if (success) setNeedsRefresh(true);
  }

  function handleEdit(user) {
    setEditingUser(user);
    setShowNewUserForm(true);
  }

  return (
    <div className='container'>
      <button className="btn btnSmall addUserBtn" onClick={() => handleAddUserClick()}>Add a user</button>
      {showNewUserForm && 
        <div className="modal">
            <button className="btnClose" onClick={() => handleClose()}>[X] Cancel</button>
            <UserForm onSubmit={addOrEditUser} user={editingUser} />
        </div>
      }
      {showUsers && <List users={users} onDelete={handleDelete} onEdit={handleEdit} />}
    </div>
)};

export default Task2;
