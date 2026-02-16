import { Routes, Route } from "react-router-dom";
// Pages:
import BlogDetailsPage from "@pages/BlogDetailsPage";
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import NewsPage from "@pages/NewsPage";
import PodcastsPage from "@pages/PodcastsPage";
import ResourcesPage from "@pages/ResourcesPage";
// Common Components:
import NavigraitonBar from "@components/Layout/NavigationBar";
import CTA from "@components/Layout/CTA";
import Footer from "@components/Layout/Footer";

function App() {
  return (
    <div className="App bg-dark-08 text-white min-h-screen">
      {/* Navigation Bar */}
      <NavigraitonBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* CTA */}
      <CTA />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;