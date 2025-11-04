import Navbar from './commponets/navbar';
import Footer from './commponets/Footer';
import HomePages from './commponets/pages/homepages';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <HomePages />

      {/* Footer*/}
      <Footer />
    </div>
  );
}

export default App;
