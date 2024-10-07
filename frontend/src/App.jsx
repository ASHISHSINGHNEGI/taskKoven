import { useState } from "react";
import "./App.css";
import axios from "axios";
import SearchBox from "./component/search";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ firstName: "", lastName: "", address: "" });
    axios
      .post("http://localhost:3000/", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <section>
        <SearchBox />
      </section>
      
    </>
  );
}

export default App;
