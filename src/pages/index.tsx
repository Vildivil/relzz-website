import { useLocation } from "react-router-dom";
import Header from "../components/Headers/Header";
import Layout from "../components/Layout";
import Skill from "../components/PageContents/skill";
import HomeContent from "../components/PageContents/homeContent";
import About from "../components/PageContents/about";

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const content = queryParams.get("content");

  let displayContent;

  if (content === "skill") {
    displayContent = <Skill />;
  } else if (content === "portofolio") {
    displayContent = <h1>display project</h1>;
  } else if (content === "about") {
    displayContent = <About />;
  } else {
    displayContent = <HomeContent />;
  }

  return (
    <>
      <Layout>
        <Header />
        {displayContent}
      </Layout>
    </>
  );
};

export default Home;
