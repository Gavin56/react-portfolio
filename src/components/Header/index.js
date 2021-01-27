function Header(props) {
  return (
    <div className="col-12">
      <div className="fixed-top">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <a className="text-white h4" href="contact.html">
              Contact
            </a>
            <br />
            <a className="text-white h4" href="index.html">
              About Me
            </a>
          </div>
        </div>

        <nav className="navbar navbar-light">
          <h1>Gavin O'Brien</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
            style="float: right"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
