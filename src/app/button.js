"use client"
import React from "react";

const Button = ({children}) => {
  const [isCensored, setCensored] = React.useState(true);

  return (
    <button
      onClick={()=>setCensored(!isCensored)}
      className={isCensored ? "censored" : ""}
    >
      {children}
    </button>
  )
}

export default Button
