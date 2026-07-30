import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import DirectoryPage from './pages/DirectoryPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DirectoryPage />} />
        <Route path="/providers/:id" element={<ProfilePage />} />
        <Route
          path="*"
          element={
            <p style={{ padding: 32 }}>
              Page not found. <Link to="/">Back to all providers</Link>
            </p>
          }
        />
      </Routes>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default App;