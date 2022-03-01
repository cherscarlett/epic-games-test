import React from 'react';

const UserForm = ({onSubmit, user}) => {
    const [name, setName] = React.useState(user ? user.name : '');
    const [email, setEmail] = React.useState(user ? user.email : '');
    const [birthday, setBirthday] = React.useState(user ? Intl.DateTimeFormat('fr-CA', {year: "numeric", month: "2-digit", day: "2-digit"}).format(new Date(user.birthday)) : '');

    function handleSubmit(event) {
        event.preventDefault();
        const id = user?.id || null;
        onSubmit({name, email, birthday, id});
    }

    function handleInputChange(event, stateSetFunction) {
        const {target} = event;
        
        stateSetFunction(target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <span>Name</span>
                    <input type="text" name="name" id="name" defaultValue={name} required onChange={(event) => handleInputChange(event, setName)} />
                </label>
                <label htmlFor="email">
                    <span>Email</span>
                    <input type="email" id="email" name="email" defaultValue={email} required onChange={(event) => handleInputChange(event, setEmail)} />
                </label>
                <label htmlFor="birthday">
                    <span>Birthday</span>
                    <input type="date" id="birthday" defaultValue={birthday} required name="birthday" onChange={(event) => handleInputChange(event, setBirthday)} />
                </label>
                <button className="btn submitBtn" type="submit">Submit</button>
            </form>
        </>
    )
};

export default UserForm;