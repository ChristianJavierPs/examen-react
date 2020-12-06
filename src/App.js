import './App.css';
import AppRoutes from './AppRoutes';
import Header from "./layouts/Header";
function App() {
  return (
<div>
<Header />
<section className="container">
<AppRoutes />
</section>
</div>
  );
}

export default App;
