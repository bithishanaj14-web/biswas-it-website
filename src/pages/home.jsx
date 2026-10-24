import SEO from "../components/SEO";
import Hero from "../components/Hero.jsx";

function Home() {
  return (
       <>
      <SEO
        title="Home"
        description="Explore web development, WordPress services, and practical digital solutions from Shanaj Bithee."
        path="/"
      />
    <div>
      <Hero />
    </div>
    </>
  );
}

export default Home;

