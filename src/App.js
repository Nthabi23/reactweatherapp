
import './App.css';
import  Weather from "./Weather";

 export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by <a href="">Nthabiseng Monageng</a> and is <a href="">open-source on Github</a> and <a href="">hosted on Netlify.</a>
        </footer>
      </div>
    </div>
  );
}


