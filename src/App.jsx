import SuccessStories from "./components/SuccessStories";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SubscribePage from "./components/SubscribePage";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <SuccessStories />
        <SubscribePage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
