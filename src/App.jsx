import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
import JobData from "./jobDummyData";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar />
        {JobData.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </>
  );
}

export default App;
