import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (!validationPass.test(user.password)) {
      alert("coloca una contraseña valida");
      return;
    }
    if (user.password !== user.password2) {
      alert("Las contraseñas no coinciden");
      return;
    }
    delete user.password2;

    fetch(`${process.env.REACT_APP_URL_BACK}/user`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset =UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 201) {
          alert("El usuario se creo correctamente");
        } else {
          alert("Comprueba los campos e intenta nuevamente");
        }
        return response.json();
      })
      .then((response) => console.log(response));
    e.target.reset();
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
        <div className="">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4">Registro</h2>
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
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword2"
                name="password2"
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
