import React, { useState } from 'react';

function Form1() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const showAlert = (event) => {
     
    alert("Username: " + username + "\nEmail: " + email + "\nAddress: " + address);
  };

  return (
    <form onSubmit={showAlert}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        
      />
      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      />
      <br />

      <label htmlFor="address">Address:</label>
      <textarea
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
       
      ></textarea>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form1;
