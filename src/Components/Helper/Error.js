import React from 'react';

const Error = ({error}) => {
 
  if(!error) return null;
  return <div><p 
  style={{
    color: "white",
    fontFamily: "cursive", 
    background: "red",
    width: "130px",
    padding: "5px",
    marginTop: "10px",
    borderRadius: "5px",
    opacity: "0.5"
}}>{error}</p></div>;
};

export default Error;
