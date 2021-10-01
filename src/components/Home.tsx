import { Link } from "react-router-dom";

type Props = {
};

export const Home: React.FC<Props> = (props) => {

  return (
    <div>
      <h2>Home from components</h2>
      <Link to="/profile">Profile</Link>
    </div>
  );
}