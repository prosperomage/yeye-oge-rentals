import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-5xl font-bold text-center mx-auto  ">
      Egon no way here
      <Link to="/">
        <h1>Go back home </h1>
      </Link>
    </div>
  );
};

export default NotFound;
