import React, { useEffect, useState } from "react";
import { SubmitHandler } from "./form";
import axios from "./requests";

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
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Name"
            value={user.Name}
            onChange={forminputHandler}></input>
        </div>

        <div className="form_element">
          <input
            type="text"
            id="Email"
            name="Email"
            placeholder="Email"
            value={user.Email}
            onChange={forminputHandler}></input>
        </div>

        <div className="form_element">
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Password"
            value={user.Password}
            onChange={forminputHandler}></input>
        </div>
        <div className="form_element">
          <button type="submit" onClick={formSubmitHandler}>
            Submit
          </button>
        </div>
      </form>

      {userArray.map((user, index) => {
        const { Name, Email, Password, id } = user;
        return (
          <div className="util_text" key={id}>
            <h4>name : {Name} </h4>
            <h4>email: {Email} </h4>
            <h4>password: {Password}</h4>
          </div>
        );
      })}
    </>
  );
}

function Section_achievements({ title, fetchUrl }) {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      var obj = request.data;
      setAchievements({ ...achievements, obj });
      console.log(achievements);
      return achievements;
    }
    fetchData();
  }, []);

  return (
    <div>
      {title} <br />
      <div>
        {/* {achievements.map((user, index) => {
          const {
            id,
            avatar,
            dob,
            uid,
            username,
            gender,
            password,
            phone__number,
            email,
          } = user;
          return (
            <div className="util_text" key={id}>
              <h4>name : {username} </h4>
              <h4>email: {email} </h4>
              <h4>password: {password}</h4>
              <h4>gender: {gender}</h4>
              <img src={avatar} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export {
  Section_landing,
  Section_photos,
  Section_forms,
  Section_buttons,
  Section_achievements,
};
