import React from 'react'
import { FaGithubSquare } from "react-icons/fa";

const Footer = ({length}) => {
// const year = new Date();
    
  return (
    <footer>{length} List {length===1?"item":"items"} 
    <a href="https://github.com/vikki9121" target="_blank" rel="noopener noreferrer">
      <FaGithubSquare />
    </a> 
     </footer>
    
  );
}

export default Footer;