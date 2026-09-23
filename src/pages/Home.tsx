import ContactCTA from "../components/ContactCTA";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <main className="flex flex-col gap-20 sm:gap-28 md:gap-36 lg:gap-44 mb-20 sm:mb-28 md:mb-40 lg:mb-52">
          <Hero />
          <ContactCTA />
        </main>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
