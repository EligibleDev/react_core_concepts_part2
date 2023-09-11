import { useEffect, useState } from 'react'
import './Users.css'
import User from './User';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => console.log(data))
    })

    return (
        <div className="user-box">
            <h2>users: {users.length}</h2>
            {
                users.map(user => <User></User>)
            }
        </div>
    )
}