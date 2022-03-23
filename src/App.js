import './app.css'
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import SidebarProfile from "./components/SidebarProfile";
import SidebarFloatingList from "./components/SidebarFloatingList";

function App() {
  return (
    <main>
      <Header />
      <section className='main-content'>
        <div className='container'>
          <SidebarProfile />
          <Gallery />
          <SidebarFloatingList />
        </div>
      </section>
    </main>
  );
}

export default App;
