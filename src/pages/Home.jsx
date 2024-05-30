import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-20">
        <Feature></Feature>
      </div>
      <div className="mt-20 mb-20">
        <Faq></Faq>
      </div>
      <div className="mb-20">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
