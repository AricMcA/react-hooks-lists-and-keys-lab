import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkLis = links.map(link => {
    return <a key={link} href={link}>{link}</a>
  })

  return <nav>{linkLis}</nav>;
}

export default NavBar;
