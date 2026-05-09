import { useState, useEffect } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);

  const itemsPerPage = 3;

  const lastUserIndex = currentPage * itemsPerPage;
  const firstUserIndex = lastUserIndex - itemsPerPage;

  const currentUSers = users.slice(firstUserIndex, lastUserIndex);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div>Pagination</div>

      <ul>
        {currentUSers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div>
        {[...Array(totalPages)].map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
