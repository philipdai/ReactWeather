let React = require('react'),
    Nav = require('Nav'),
    Main = (props) => {
      return (
        <div>
          <Nav></Nav>
          <h2>Main component</h2>
          {props.children}
        </div>
      );
    };
    
module.exports = Main;
