import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [save, setSave] = useState([]);
  const [nameGroup, setNameGroup] = useState([]);

  function HandleName(event) {
    setName(event.target.value);
  }

  function AddName() {
    nameGroup.push(name);
    console.log(nameGroup);
  }

  function HandleKind() {
    const randomname = Math.floor(Math.random() * nameGroup.length);
    const selectName = nameGroup[randomname];

    save.push(selectName);
    console.log(save);
  }

  return (
    <>
      <h1>Sorteio de Nomes </h1>
      <div>{save}</div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="adicione um nome"
          onChange={HandleName}
        />
        <button onClick={AddName}>adicionar</button>
      </div>
      <div>
        <button onClick={HandleKind}>sortear</button>
      </div>
    </>
  );
}

export default App;
