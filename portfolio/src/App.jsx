import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Slider from './components/Slider';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1e] text-slate-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Slider />
          <Work />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
