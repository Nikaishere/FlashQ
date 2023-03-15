import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TitleNoButtons from "./TitleNoButtons";

const HOSTNAME = "http://localhost:5000";

function Register() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { name, email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const { data } = await axios(`${HOSTNAME}/users/register`, {
        method: "POST",
        data: credentials,
      });
      //store it locally
      localStorage.setItem("token", data.token);
      console.log(data.message, data.token);
      navigate("/create-subject");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TitleNoButtons />
      <div>
        <div className="flex flex-col border-opacity-50 justify-center items-center">
          <div className="grid card background-color:bg-mustard m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
            <div>
              <input
                value={name}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="create your username"
                className=" mt-1 btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
              />
              <input
                value={email}
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="provide an email"
                className=" mt-1 btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
              />
              <input
                value={password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="create a password"
                className=" mt-1 btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
              />
              <Link to="/subjects">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={login}
                >
                  Register for free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;