import React from 'react';

function Header(props) {
  return (
    <div>
        
    <nav class="navbar bg-dark navbar-dark navbar-expand-sm fixed-top">
        <div class="navbar-brand">Portfolio</div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">

            <li class="nav-item">
              <a class="nav-link" href="">Projects</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="">Articles</a>
            </li>

          </ul>
        </div>
      </nav>

    </div>
  );
}

export default Header;