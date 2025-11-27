import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ali",
      age: 24,
    },
    {
      id: 2,
      name: "Samar",
      age: 26,
    },
    {
      id: 3,
      name: "Obid",
      age: 21,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      name: e.target.name.value,
      age: +e.target.age.value,
    };

    setUsers([...users, newUser]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }; 
  

  const handleReverse = () => {
    setUsers([...users].reverse());
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="age" placeholder="Age" />
        <button type="submit">Add</button>
      </form>

      {/* Reverse tugmasini form tashqarisiga chiqardim */}
      <button
        onClick={handleReverse}
      >
        Reverse
      </button>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "5px 0",
            padding: "5px",
            border: "1px solid #ccc",
          }}
        >
          <p style={{ margin: 0 }}>
            {user.name} | {user.age}
          </p>
          <button
            onClick={() => handleDelete(user.id)}
            style={{
              backgroundColor: "#ff4444",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;
