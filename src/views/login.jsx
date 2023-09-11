import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/login.css";

function Login() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const submit = () => {
    console.log("working fine");
    setData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container-test d-flex justify-content-center align-items-center">
        <div className="box-register d-flex justify-content-center align-items-center">
          <div className="">
            <div>
              <input
                placeholder="full name"
                onChange={handleChange}
                value={data?.firstName}
                name="firstName"
              />
            </div>
            <div>
              <input
                placeholder="last name"
                onChange={handleChange}
                value={data?.lastName}
                name="lastName"
              />
            </div>
            <div>
              <input
                placeholder="email"
                onChange={handleChange}
                value={data?.email}
                name="email"
              />
            </div>
            <div>
              <input
                placeholder="password"
                onChange={handleChange}
                value={data?.password}
                name="password"
                type="password"
              />
            </div>

            <button className="buttonSend" onClick={submit} test-data="sendButton">
              SEND
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
