import React from 'react';

import './List.sass';

const List = ({users, onDelete, onEdit}) => (
    <>
        <h1>All Users</h1>
        <ul className="usersList">
            {users.map(({name, birthday, email, id}) => (
                <li key={id}>
                    <a href={`mailto:${email}`}>{name}</a>
                    <button className="btnPlain" onClick={() => onEdit({name, birthday, email, id})} type="button" aria-label="Edit user">✏️</button>
                    <span>{Intl.DateTimeFormat('en-US', { dateStyle: 'full'}).format(new Date(birthday))}</span>
                    <button className="btnPlain" onClick={() => onDelete(id)} type="button" aria-label="Delete user">❌</button>
                </li>
            ))}
        </ul>
    </>
);

export default List;
