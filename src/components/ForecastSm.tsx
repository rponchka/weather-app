import { css } from "@emotion/react";
import { FC } from "react";
import List from "./List";
import { useNavigate } from "react-router-dom";
import { IForecastData } from "../types/Forecast";

interface IForecast {
  data: IForecastData | null;
}

const ForecastSm: FC<IForecast> = ({ data }) => {
  const naviagtion = useNavigate();

  const handleClick = (): void => {
    naviagtion("/forecast");
  };

  if (!data || !data.forecast) {
    return <div>Завантаження...</div>;
  }

  const containerStyle = css`
    background-color: var(--dark-box-bg-color);
    width: 525px;
    height: 350px;
    border-radius: 25px;
    padding: 25px;
    box-sizing: border-box;
    color: var(--font-color);
    font-family: var(--light-font);
    margin-left: 75px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #242424; /* цвет зоны отслеживания */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #151515; /* цвет бегунка */
      border-radius: 20px; /* округлось бегунка */
      border: 3px solid #242424; /* отступ вокруг бегунка */
    }
  `;

  const divStyle = css`
    font-family: var(--bold-font);
    font-size: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #191919;
    display: flex;
    justify-content: space-between;
  `;

  const buttonStyle = css`
    background-color:var(--box-bg-color);
    border: none;
    border-radius: 5px;
    color: white;
    font-family:var(--light-font);
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  `;

  return (
    <div css={containerStyle}>
      <div onClick={handleClick} css={divStyle}>
        Forecast for 7 days
        <button css={buttonStyle}>Show more</button>
      </div>

      {data.forecast.forecastday.map((item, index: number) => {
        return <List key={index} data={item} />;
      })}
    </div>
  );
};

export default ForecastSm;
