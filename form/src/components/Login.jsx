import React, { useEffect, useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [homeAdress, setHomeAdress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
        // console.log("UserName:", userName,  "surname:",surname,"IdNumber:",IdNumber, "EmailAdress:", EmailAdress, "HomeAdress:", HomeAdress, "Describtion:", describtion);

// I'm storing user data
    const userData = {
      userName,
      surname,
      idNumber,
      emailAdress,
      homeAdress,
      description,
    };
   
    localStorage.setItem(userName, JSON.stringify(userData));
    console.log("userData:", userData);
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem(userName);
   
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUserName(userData.userName);
      setSurname(userData.surname);
      setIdNumber(userData.idNumber);
      setEmailAdress(userData.emailAdress);
      setHomeAdress(userData.homeAdress);
      setDescription(userData.description);
    }
  }, [userName]);

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2> Login Form</h2>
        <p>Please fill in this form to create an account.</p>
        <label htmlFor="userName">Name</label>
        <input
          type="username"
          placeholder="Enter your userName"
          name="userName"
          className="form-control"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="surname">Surname</label>
        <input
          type="surname"
          placeholder="Enter your Surname"
          name="surname"
          className="form-control"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />

        <label htmlFor="idNumber">Id Number</label>
        <input
          type="Id number"
          placeholder="Enter your id number"
          name="idNumber"
          className="form-control"
          id="idNumber"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <br />

        <label htmlFor="email Adress">Email Address</label>
        <input
          type="email Adress"
          placeholder="Enter your Email Address"
          name="emailAdress"
          className="form-control"
          id="emailAdress"
          value={emailAdress}
          onChange={(e) => setEmailAdress(e.target.value)}
        />
        <br />
        <label htmlFor="home Adress">Home Address</label>
        <input
          type="home adress"
          placeholder="Home Address"
          name="homeAdress"
          className="form-control"
          id="homeAdress"
          value={homeAdress}
          onChange={(e) => setHomeAdress(e.target.value)}
        />
        <br />

        <label htmlFor="description">Description</label>
        <input
          type="describtion"
          placeholder="Type in your comments here..."
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
