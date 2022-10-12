import Header from "./Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div className="w-fit lg:w-auto ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
