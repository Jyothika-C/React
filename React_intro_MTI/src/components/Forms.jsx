import { useState } from "react";

export default function Forms() {
  let [formData, setFormData] = useState({ name: "Tony", password: "123" });
  function handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function submitData(e) {
    e.preventDefault();
    setFormData(formData);
  }
  return (
    <>
      <h1>React Forms</h1>
      <form action="">
        <label htmlFor="">Name : </label>
        <input type="text" name="name" id="name" value={formData.name} placeholder="Give First Name" onChange={(e) => handleInputChange(e)} />
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          placeholder="Give Password"
          onChange={(e) => handleInputChange(e)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
