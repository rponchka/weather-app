import { css, Global } from "@emotion/react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodaysWeatherPage from "./pages/TodaysWeatherPage";
import WeeklyWeather from "./pages/WeeklyWeather";
import WeatherNewsPage from "./pages/WeatherNewsPage";
import { globalStyles } from "./styles/variables";

const App = () => {
  const containerStyle = css`
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color);
  `;

  return (
    <Router>
      <Global styles={globalStyles} />
      <div css={containerStyle}>
        <Header />
        <Routes>
          <Route path="/" element={<TodaysWeatherPage />} />
          <Route path="/forecast" element={<WeeklyWeather />} />
          <Route path="/weather-news" element={<WeatherNewsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
