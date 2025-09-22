import Navbar from '@/components/custom/Navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default HomeLayout;
