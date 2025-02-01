import { css } from "@emotion/react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodaysWeatherPage from "./pages/TodaysWeatherPage";
import WeeklyWeather from "./pages/WeeklyWeather";

const App = () => {
  return (
    <Router>
      <div
        css={css`
          width: 100%;
          height: 100vh;
          background-color:#0a0a0a;
        `}
      >
        <Header />
        <Routes>
          <Route path="/" element={<TodaysWeatherPage />} />
          <Route path="/forecast" element={<WeeklyWeather />} />
          <Route path="/weather-news" element={<div>Weather News Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
