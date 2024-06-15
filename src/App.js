import './App.css';

export default function App() {
  return (
    <div className="App">
      <div>
        <Image image="https://avatars.githubusercontent.com/u/54628250?s=400&u=133dc612d5f170faa6be1816797c767b01a135d2&v=4" />
        <h1>Abhinandan Kumar</h1>
        <p>
          I am associate software developer at Gainsight. Previously I worked as
          software developer intern at IIT Bombay under Prof. Ganesh
          Ramakrishnan - CSE-IITB
        </p>
        <label>Skills: </label>
        <Skill skill="java" />
      </div>
    </div>
  );
}

export function Image(props) {
  return (
    <div>
      <img className="img" src={props.image} alt="profile Pic" />
    </div>
  );
}

export function Skill(props) {
  return <span>{props.skill}</span>;
}
