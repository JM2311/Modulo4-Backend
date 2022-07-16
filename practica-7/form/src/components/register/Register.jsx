import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const url_back = process.env.REACT_APP_URL_BACK;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${url_back}`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          alert("no se pudo crear el usuario");
          return;
        }
        response.json();
      })
      .then((response) => {
        alert("usuario creado con exito");
        console.log(response);
      });
  };

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-6">
          <h2 className="mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
