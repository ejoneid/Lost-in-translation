import { Link } from "react-router-dom";
import './NotFound.css'

function NotFound() {
  return (
    <main className="centerText mt-4">
      <h3>Page not found!</h3>
      <Link to="/">Home</Link>
    </main>
  );
}

export default NotFound;
