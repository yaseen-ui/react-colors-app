import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    part1:
    You're given the UI for a basic form. Your task is to 
    hook it all up using refs. 

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to 
    empty strings.

    part2: 
    Develop a search tag with debounce functionality.
    Debouncing means that a function will not be called again until
    a certain amount of time has passed. So here the setsearch method
    is called repeatedly for every key stroke, instead it should
    be delayed by the time peroid mentioned in the debounce method (add some 
    console log to validate this no need to use any api mock). 
    It should avoid memory leaks and the solution provided should be scalable.
    
    For api integration create an account in https://developers.giphy.com/dashboard/
    Once you have got your API token refer the search api docs page

    eg: api endpoint
    https://api.giphy.com/v1/gifs/search?api_key=< your api token >&q=<search value>

    Display the result images below in a 4x4 grid box, you can choose any size of your preference

    NOTE: 
    do not use any external library like lodash

*/

function ReactForm() {
  const [formData, setFormData] = useState({});
  const [colors, setColors] = useState([]);

  const handleSubmit = (e) => {
    console.log(formData);
  };

  useEffect(() => {
    const api = "https://jsonplaceholder.typicode.com/comments";
    fetch(api, { method: "GET" })
      .then((res) => res.json())
      .then(
        (result) => {
          setColors(result, console.log(colors));
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const handleReset = () => {
    const data = { ...formData };
    Object.keys(data).forEach((ele) => (data[ele] = ""));
    setFormData(data);
  };

  const handleInputChange = (e, key) => {
    const data = { ...formData };
    data[key] = e.target.value;
    setFormData(data);
  };

  const handleSearch = (value) => {
    console.log(value);
  };

  const highLightInput = (e) => {
    document.getElementById(e).focus();
  };

  const debounce = (callback, delay) => {};

  // do not modify this line
  const debouncedSearch = (e) => {
    const data = [...colors];
    if (!e.target.value) {
      setColors(data);
    } else {
      const filteredData = data.filter((ele) =>
        ele.email.includes(e.target.value)
      );
      setColors(filteredData);
    }
  };
  return (
    <React.Fragment>
      <div>
        <p>part 1</p>
        <label>
          Name:
          <input
            id="name"
            placeholder="name"
            type="text"
            onChange={(e) => handleInputChange(e, "name")}
            value={formData.name}
          />
        </label>
        <label>
          Email:
          <input
            id="email"
            placeholder="email"
            type="text"
            onChange={(e) => handleInputChange(e, "email")}
            value={formData.email}
          />
        </label>
        <label>
          Password:
          <input
            id="pwrd"
            placeholder="password"
            type="text"
            onChange={(e) => handleInputChange(e, "pwrd")}
            value={formData.pwrd}
          />
        </label>
        <hr />
        <button onClick={(e) => highLightInput("name")}>
          Focus Name Input
        </button>
        <button onClick={(e) => highLightInput("email")}>
          Focus Email Input
        </button>
        <button onClick={(e) => highLightInput("pwrd")}>
          Focus Password Input
        </button>
        <hr />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <hr />
        <p>part 2</p>
        <label>
          Search:
          <input
            placeholder="search with debounce"
            type="text"
            // do not modify this line
            onChange={(e) => debouncedSearch(e)}
          />
          Colors List:
          <ul>
            {colors.map((ele) => (
              <li key={ele.id}>{ele.email}</li>
            ))}
          </ul>
        </label>
      </div>
    </React.Fragment>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ReactForm />, rootElement);
