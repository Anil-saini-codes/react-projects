import { useState, useEffect } from "react";

function DebounceSearch() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 1500);
    return () => clearTimeout(timer);
  }, [search]);

  const filterusers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLocaleLowerCase()),
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

export default DebounceSearch;
