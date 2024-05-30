import DiscountBanner from "./components/common/Discount_banner";
import Footer from "./components/common/Footer";
import InuitLinks from "./components/common/Inuit_links";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <InuitLinks />
      <DiscountBanner />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
