import React, { useState } from 'react';
import "./App.css";

function App() {
  const [users, setUsers] = useState([
      { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
      { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
      { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
      { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
      { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
  ]);

  return (
      <div className="container">
          <h3 className="p-3 text-center">React - Display a list of items</h3>
          <table className="table table-striped table-bordered">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                  </tr>
              </thead>
              <tbody>
                  {users && users.map(user =>
                      <tr key={user.id}>
                          <td>{user.firstName} {user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.role}</td>
                      </tr>
                  )}
              </tbody>
          </table>
      </div>
  );
}

export default App;
