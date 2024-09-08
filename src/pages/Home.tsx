import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <div>
      <h1>Hello!</h1>
      <Link to="/page02">ページ2へ</Link>
    </div>
  );
};

export default Home;
