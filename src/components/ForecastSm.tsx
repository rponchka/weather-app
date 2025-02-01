import { css } from "@emotion/react";
import { FC } from "react";
import List from "./List";
import { useNavigate } from "react-router-dom";

interface IForecast {
  data: {
    forecast: {
      forecastday: {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
      }[];
    };
  };
}

const ForecastSm: FC<IForecast> = ({ data }) => {

    const naviagtion = useNavigate()

    const handleClick = (): void => {
        naviagtion('/forecast')
    }


  if (!data || !data.forecast) {
    return <div>Завантаження...</div>;
  }

  return (
    <div
      css={css`
        background-color: #060606;
        width: 525px;
        height: 350px;
        border-radius: 25px;
        padding: 25px;
        box-sizing: border-box;
        color: #ececec;
        font-family: MontE;
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
      `}
    >
      <div
        onClick={handleClick}
        css={css`
          font-family: montH;
          font-size: 30px;
          padding-bottom: 10px;
          border-bottom: 1px solid #191919;
          display: flex;
          justify-content: space-between;
        `}
      >
        Forecast for 7 days
        <button
          css={css`
            background-color: #242424;
            border: none;
            border-radius:5px;
            color: white;
            font-family:montE;
            cursor: pointer;
            &:hover{
             opacity:0.7;
            }
          `}
        >
          Show more
        </button>
      </div>

      {data.forecast.forecastday.map((item, index: number) => {
        return <List key={index} data={item} />;
      })}
    </div>
  );
};

export default ForecastSm;
