import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Userdemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error message:", error);
        setLoading(false);
      });
  },[]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>This is the list</h1>
      <ul style={{listStyleType:'number'}}>
        {users.map(user => (
          <li key={user.id}>{user.name},{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Userdemo />, document.getElementById('root'));

