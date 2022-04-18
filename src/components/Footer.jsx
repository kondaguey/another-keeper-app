import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>(the)keeper(app)&trade;</p>
    </footer>
  );
}

export default Footer;