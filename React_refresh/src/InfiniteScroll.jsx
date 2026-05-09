import React, { useEffect, useState } from "react";

function InfiniteScroll() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=4`,
      );

      const data = await response.json();

      // Append new users
      setUsers((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (bottom && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div>
      <h2>Infinite Scroll Example</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "10px",
            border: "1px solid gray",
            marginBottom: "40px",
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      {loading && <h3>Loading...</h3>}
    </div>
  );
}

export default InfiniteScroll;
