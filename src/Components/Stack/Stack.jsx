import { useState } from "react";
import html from "../../assets/icons/html5-original.svg";
import css from "../../assets/icons/css3-original.svg";
import js from "../../assets/icons/javascript-original.svg";
import tailwind from "../../assets/icons/tailwindcss-plain.svg";
import react from "../../assets/icons/react-original.svg";
import SingleStack from "../SingleStack/SingleStack";
import sass from "../../assets/icons/icons8-sass-48.png";
import express from "../../assets/icons/icons8-express-js-48.png";
import expo from "../../assets/icons/icons8-expo-50.png";
import node from "../../assets/icons/node-js.png";
import mongodb from "../../assets/icons/mongodb.png";
import c from "../../assets/icons/c.png";
import c_sharp from "../../assets/icons/c-sharp.png";
import sql from "../../assets/icons/sql.png";
import java from "../../assets/icons/java.png";
import redux from "../../assets/icons/redux.png";
import python from "../../assets/icons/python.png";
import MaterialUi from "../../assets/icons/materialui.png";

import "./Stack.css";

function Stack() {
  const [languages, setLanguages] = useState([
    { name: "Java", icon: java },
    { name: "Python", icon: python },
    { name: "csharp", icon: c_sharp },
    { name: "C", icon: c },
    // { name: "Sass", icon: sass },
    // { name: "ReactJS", icon: react },
    // { name: "NodeJS", icon: node },
    // { name: "ExpressJS", icon: express },
    // { name: "Expo", icon: expo },
  ]);

  const [frontend, setFrontend

  ] = useState([
    { name: "html", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Sass", icon: sass },
    { name: "ReactJS", icon: react },
    { name: "Redux", icon: redux },

    { name: "Material UI", icon: MaterialUi },

    { name: "Expo", icon: expo },
  ]);

  const [backend, setBackend

  ] = useState([
    // { name: "", icon: html },
    // { name: "CSS", icon: css },
    // { name: "JavaScript", icon: js },
    // { name: "Tailwind CSS", icon: tailwind },
    // { name: "Sass", icon: sass },
    // { name: "ReactJS", icon: react },
    { name: "NodeJS", icon: node },
    { name: "ExpressJS", icon: express },
    { name: "MongoDB", icon: mongodb },
    {name: "SQL", icon: sql},

    // { name: "Expo", icon: expo },
  ]);



  const languagesStack = languages.map(({ icon, name }) => {
    return <SingleStack key={name} icon={icon} name={name} />;
  });
  const frontendStack = frontend.map(({ icon, name }) => {
    return <SingleStack key={name} icon={icon} name={name} />;
  });
  const backendStack = backend.map(({ icon, name }) => {
    return <SingleStack key={name} icon={icon} name={name} />;
  });
  return (
    <section className="stack">
        <h1 id="stack">TECH STACK</h1>


      <div className="stack-inner">
        <p id="stack">Frontend</p>

        <div className="stack-container">{frontendStack}</div>
      </div>
      <div className="stack-inner">
        <p id="stack">Backend</p>

        <div className="stack-container">{backendStack}</div>
      </div>
      <div className="stack-inner">
        <p id="stack">Languages</p>

        <div className="stack-container">{languagesStack}</div>
      </div>
    </section>
  );
}

export default Stack;
