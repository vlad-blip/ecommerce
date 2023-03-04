import Header from "../components/Header";
import Nav from "../components/Navigation/Nav";

const MainPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <main className="container">
        <h1 className="h1">I am main page</h1>
      </main>
    </>
  );
};

export default MainPage;
