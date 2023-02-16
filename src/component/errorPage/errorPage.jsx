import { Link } from "react-router-dom";
import "./errorPage.scss";

const ErrorPage = () => {
  return (
    <div className="errorPageDiv container">
      <div>No Such Page</div>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};
export default ErrorPage;
