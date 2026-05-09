import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filterusers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <>
      <h2>Search</h2>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filterusers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Search;
