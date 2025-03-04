import Navbar from "./Headers/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
