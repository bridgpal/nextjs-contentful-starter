import '../styles/globals.css';
import { Navbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
