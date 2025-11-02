import Footer from '@/components/custom/Footer';
import Navbar from '@/components/custom/Navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default HomeLayout;
