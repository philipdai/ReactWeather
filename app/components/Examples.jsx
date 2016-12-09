let React = require('react'),
    {Link} = require('react-router'),
    Examples = () => {
      return (
        <div>
          <h1 className="text-center">Examples</h1>
          <p>Here are some example locations to try out:</p>
          <ol>
            <li>
              <Link to="/?location=Columbus">Columbus, OH</Link>
            </li>
            <li>
              <Link to="/?location=Rio">Rio, Brazil</Link>
            </li>
          </ol>
        </div>
      );
    };

module.exports = Examples;
