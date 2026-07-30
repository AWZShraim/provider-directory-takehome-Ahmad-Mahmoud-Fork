import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div><h1>Directory</h1><Link to="/providers/test">test link</Link></div>} />
      <Route path="/providers/:id" element={<h1>Profile</h1>} />
    </Routes>
  );
}

export default App;