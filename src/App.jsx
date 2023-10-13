import SuccessStories from "./components/SuccessStories";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SubscribePage from "./components/SubscribePage";
import GrowthGraph from "./components/GrowthGraph";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <SuccessStories />
        <GrowthGraph />
        <SubscribePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
