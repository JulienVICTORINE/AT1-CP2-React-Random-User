import { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  // const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    try {
      const request = await fetch("https://randomuser.me/api/?results=10");
      const response = await request.json();
      const userData = response.results;
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // code qui va être exécuter lors du chargement du composant
    fetchUserData();
  }, []);

  if (users.length == 0) {
    return <p style={{ color: "white" }}>Chargement...</p>;
  }

  return (
    <>
      <h1>RandomUser</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {users.map((user, index) => (
          <Card
            key={index}
            img={user.picture.large}
            name={`${user.name.first} ${user.name.last}`}
            age={user.dob.age}
            location={`${user.location.city}, ${user.location.country}`}
            email={user.email}
          />
        ))}
      </div>    
    </>
  );
}

export default App;
