import NavBar from "../partials/NavBar";
import HeroHome from "../partials/HeroHome";

function Home() {
  return (
    <section className="flex flex-col h-screen">
       {/*  Site Navigation */}
       <NavBar />

        {/*  Page content */}
      <main className="flex flex-grow">

         {/*  Page sections */}
         <HeroHome />

      </main>
    </section>
  );
}

export default Home;