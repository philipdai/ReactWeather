let React = require('react'),
    Nav = require('Nav'),
    Main = (props) => {
      return (
        <div>
          <Nav></Nav>
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              {props.children}
            </div>
          </div>
        </div>
      );
    };

module.exports = Main;
