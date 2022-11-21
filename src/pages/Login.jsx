import React, { useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setFormData((prevState) => ({ ...prevState, [evt.target.id]: value }));
  }

  const back = () => {
    navigate("/");
  };
  const logMeIn = (e) => {
    e.preventDefault();

    if (formData.username == "" || formData.password == "") {
      alert("Fill in the blanks");
    } else if (formData.username === "faruk" && formData.password === "12345") {
      sessionStorage.setItem("todo_user", formData.username);
      navigate("/");
    } else {
      alert("put in the correct credentials !!");
    }
  };

  return (
    <div className="d-flex w-full">
      <Button onClick={back}>Back</Button>
      <div className="shadow-2xl rounded-md p-5 md:w-[500px] w-[380px]">
        <form className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Login</h1>
          <div>
            <div className="mb-2 block text-left">
              <Label
                htmlFor="username"
                value="Your username"
                className="text-white"
              />
            </div>
            <TextInput
              id="username"
              placeholder="username"
              type="text"
              onChange={handleChange}
              defaultValue={formData.twitter}
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block text-left">
              <Label
                htmlFor="password"
                value="Your password"
                className="text-white"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
              defaultValue={formData.twitter}
              required={true}
              shadow={true}
            />
          </div>
          <Button type="submit" onClick={logMeIn} className="mt-10 w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
