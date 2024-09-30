import { BrowserRouter, Routes, Route } from "react-router-dom";

// contexts
import { JobProvider } from "./contexts/jobContext";


// pages & components
import Home from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";

const App = () => {

    return (
      <div className="App">
        <JobProvider>
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<JobPage/>}/>
              <Route path="/add-job" element={<AddJobPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        </JobProvider>
      </div>
    );
  }
  
  export default App;
