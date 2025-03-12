import { useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const Contador = () => {
  let [numero, actualizador] = useState(21);
  // const {value, actualizador} = React.useState(21);
  console.log(numero);
  return (
    <>
      <button onClick={() => actualizador(numero + 1)}>incrementar</button>
      <button onClick={() => actualizador(numero - 1)}>decrementar</button>
      <span>{numero}</span>
    </>
  );
};

root.render(<Contador />);
