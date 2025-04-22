import { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const request = await fetch("https://randomuser.me/api/");
      const response = await request.json();
      const userData = response.results[0]; // j'affiche un utilisateur dans un premier temps
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // code qui va être exécuter lors du chargement du composant
    fetchUserData();
  }, []);

  if (!user) {
    return <p style={{ color: "white" }}>Chargement...</p>;
  }

  return (
    <>
      <h1>RandomUser</h1>
      <Card
        img={user.picture.large}
        name={`${user.name.first} ${user.name.last}`}
        age={user.dob.age}
        location={`${user.location.city}, ${user.location.country}`}
        email={user.email}
      />
    </>
  );
}

export default App;
