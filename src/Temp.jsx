import React, { useEffect, useState } from "react";

function Temp() {
  const [user, setUser] = useState([]);

  useEffect(async () => {
    const Response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(Response);
    const JResponse = await Response.json();
    console.log(JResponse);
    setUser(JResponse);
    // .then(response => console.log("this",typeof response)) // Parse the response body as JSON
    // .then(data => console.log(data)) // Work with the parsed data
    // .catch(error => console.error('Error:', error));
  }, []);
  return (
    <div className="place-items-center">
      <h1 className="text-3xl p-4 m-4">User Data</h1>
      <table className="p-3 border-2 w-auto text-center">
      <thead className="p-2 border-2">
      <tr>
        <th className="p-2 border">ID</th>
        <th className="p-2 border">Name</th>
        <th className="p-2 border">Username</th>
        <th className="p-2 border">Email</th>
        <th className="p-2 border">Phone</th>
      </tr>
    </thead>
        <tbody className="p-6 m-2 ">
          {user.map((user) => {
            return (
              <>
                {/* <p>
              {user.email} | {user.name} | {user.phone}
            </p> */}
                <tr className="space-x-9">
                  <td className="p-2 border">{user.id}</td>
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.username}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.phone}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Temp;
