// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class NewSyntax {
  name = "Jen";
}

const NewSyntax = new NewSyntax();
console.log(NewSyntax);
