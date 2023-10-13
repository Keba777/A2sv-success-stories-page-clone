import SuccessStories from "./components/SuccessStories";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SubscribePage from "./components/SubscribePage";
import GrowthGraph from "./components/GrowthGraph";
import Introduction from "./components/Introduction";
import GiftButton from "./components/GiftButton";

function App() {
  return (
    <div>
      <NavBar />
      <aside>
        <GiftButton />
      </aside>
      <main>
        <Introduction />
        <SuccessStories />
        <GrowthGraph />
        <SubscribePage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
