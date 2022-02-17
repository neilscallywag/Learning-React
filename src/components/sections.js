import React, { useState } from "react";
import { SubmitHandler } from "./form";

const images = [
  {
    img: "<img src='https://picsum.photos/200/300?random=1'>",
    title: "rand1",
  },
  {
    img: "<img src='https://picsum.photos/200/300?random=2'>",
    title: "rand2",
  },
];

function Section_landing() {
  return (
    <section className="section_landing">
      <div className="container">
        <h1 className="container_title">Helo its neil</h1>
      </div>
    </section>
  );
}

function Section_photos() {
  return (
    <section className="section_photos">
      <div className="util_text">
        <span>Our factory</span> is dedicated to the sophisticated production of
        fences that feature a galvanized steel core of the highest quality.
      </div>
    </section>
  );
}

function Section_buttons() {
  const data = [
    { id: 1, text: "Hello" },
    { id: 2, text: "world" },
    { id: 3, text: "test" },
  ];

  const [text, setText] = React.useState(data);

  const removeText = (id) => {
    let newText = text.filter((message) => message.id !== id);
    setText(newText);
  };

  return (
    <>
      <section>
        <div className="util_text">
          {/* For each loop JS */}
          {text.map((message) => {
            const { id, text } = message;
            return (
              <div key={id}>
                <h4>
                  {id},{text}
                </h4>
                <button onClick={() => removeText(id)}>Remove text</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function Section_forms() {
  const [user, setUser] = useState({ Name: "", Email: "", Password: "" });
  const [userArray, setUserArray] = useState([]);

  const forminputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (user.Name && user.Email && user.Password) {
      const newUserArray = { ...user, id: new Date().getTime().toString() };
      setUserArray([...userArray, newUserArray]);
      setUser({ Name: "", Email: "", Password: "" });
    }
  };

  return (
    <>
      <form>
        <div className="form_element">
          <label htmlFor="Name">Name :</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={user.Name}
            onChange={forminputHandler}></input>
        </div>

        <div className="form_element">
          <label htmlFor="Email">Email :</label>
          <input
            type="text"
            id="Email"
            name="Email"
            value={user.Email}
            onChange={forminputHandler}></input>
        </div>

        <div className="form_element">
          <label htmlFor="Password">Password :</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={user.Password}
            onChange={forminputHandler}></input>
        </div>
        <button type="submit" onClick={formSubmitHandler}>
          Submit
        </button>
      </form>

      {userArray.map((user, index) => {
        const { Name, Email, Password, id } = user;
        return (
          <div key={id}>
            <h4>name : {Name} </h4>
            <h4>email: {Email} </h4>
            <h4>password: {Password}</h4>
          </div>
        );
      })}
    </>
  );
}

export { Section_landing, Section_photos, Section_forms, Section_buttons };
