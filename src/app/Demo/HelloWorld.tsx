import React from "react";

type HelloWorldProps = {
  name: string;
};

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  return <div>Hello, {name}</div>;
};

export default HelloWorld;
