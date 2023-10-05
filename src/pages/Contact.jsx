import React from 'react'
import { useLocation } from "react-router-dom";

const Contact = () => {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  
  return (
    <div>
        <h2>Hey, {name}! Contact us here:</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum est quis, consequatur porro minus impedit aut animi, qui sapiente a molestias eius illo? Deserunt pariatur officiis veniam et fuga?</p>
    </div>
  )
}

export default Contact
