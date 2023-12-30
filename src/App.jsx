import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar />
        <JobCard />
      </div>
    </>
  );
}

export default App;
