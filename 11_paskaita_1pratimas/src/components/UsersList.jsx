import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Users">
      {users.map((user) => (
        <div key={user.id}>
          <h2 className="name">Name: {user.name}</h2>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
