import Header from "./Header";
import Footer from "./Footer";
import { Analytics } from '@vercel/analytics/react';
function Layout({ children }) {
  return (
    <div className="w-fit lg:w-auto ">
      <Header />
      <main>
        {children}
        <Analytics />  
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
