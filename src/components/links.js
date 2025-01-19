import React from "react";

function Links({ github, linkedin }) {
  return (
    <div id="links">
      <h3>Links</h3>
      <ul>
        <li>
          <a href={github}>
          https://github.com/liza
          </a>
        </li>
        <li>
          <a href={linkedin}>
          https://www.linkedin.com/in/liza/
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;