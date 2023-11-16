
import './App.css';
import  Weather from "./Weather";

 export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by Nthabiseng Monageng and is <a href="https://github.com/Nthabi23/reactweatherapp" target="_blank" rel="noreferrer">open-source on Github</a> and <a href="">hosted on Netlify.</a>
        </footer>
      </div>
    </div>
  );
}


