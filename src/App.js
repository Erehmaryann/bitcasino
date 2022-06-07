import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto py-6 lg:px-32 bg-primary'>
        <Header />
        <Hero />
      </div>
      <div className='container mx-auto py-6 lg:px-32 bg-white'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
