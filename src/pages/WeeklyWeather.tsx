import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { css } from "@emotion/react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { formatDate } from "../utils/formateDate";
import { IconTemperature, IconTemperatureCelsius } from "@tabler/icons-react";
import { useWeatherData } from "../hooks/useWeatherData";

const WeeklyWeather: FC = observer(() => {
  const [value, setValue] = useState<number>(0);
  const {forecastForEveryDay} = useWeatherData()


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const ifRainOrSnow = (value: number) => {
    if(value === 0){
      return "немає"
    }
    else{
      return "є"
    }
  }

  if (!forecastForEveryDay) {
    return <div>Loading...</div>;
  }

  return (
    <div
      css={css`
        width: 100%;
        height: 873px;
        padding: 0 280px;
        padding-top: 50px;
        box-sizing: border-box;
        color: white;
      `}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{
          background: "#060606",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottom: "1px solid #242424",
          fontFamily: "montH",
        }}
      >
        {forecastForEveryDay?.forecastday.map((day: any, index: number) => (
          <Tab
            sx={{ color: "#ececec", fontFamily: "montH" }}
            key={index}
            label={formatDate(day.date)}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          padding: 3,
          background: "#060606",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        {forecastForEveryDay?.forecastday.map(
          (day: any, index: number) =>
            value === index && (
              <Box
                key={index}
                css={css`
                  font-family: montE;
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <Box
                  css={css`
                    border: 2px solid #121212;
                    border-radius: 5px;
                    padding: 10px;
                    box-sizing: border-box;
                    width: 645px;
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <Typography
                      css={css`
                        font-family: montH;
                        font-size: 25px;
                      `}
                    >
                      Денна температура
                    </Typography>
                    <IconTemperature stroke={1.5} width={30} height={30} />
                  </div>
                  <div
                    css={css`
                      font-family: montH;
                      font-size: 30px;
                      display: flex;
                      align-items: center;
                    `}
                  >
                    {day.day.avgtemp_c}
                    <IconTemperatureCelsius
                      stroke={2.5}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div
                    css={css`
                      font-size: 24px;
                      display: flex;
                      align-items: center;
                    `}
                  >
                    Мінімальна температура: {day.day.mintemp_c}
                    <IconTemperatureCelsius scale={0.5} />
                  </div>
                  <div
                    css={css`
                      font-size: 24px;
                      display: flex;
                      align-items: center;
                    `}
                  >
                    Максимальна температура: {day.day.maxtemp_c}
                    <IconTemperatureCelsius scale={0.5} />
                  </div>
                </Box>

                <Box
                  css={css`
                    border: 2px solid #121212;
                    border-radius: 5px;
                    padding: 10px;
                    box-sizing: border-box;
                    width: 645px;
                    height: 170px;
                  `}
                >
                  <Typography
                    css={css`
                      font-size: 25px;
                      font-family: montH;
                    `}
                  >
                    Погодні умови
                  </Typography>
                  <Typography
                    css={css`
                      font-size: 20px;
                      font-family: montE;
                    `}
                  >
                    Максимальна швидкість вітру: {day.day.maxwind_kph}км
                    <span css={css`font-family:arial;`}>/</span>г
                  </Typography>
                  <Typography css={css`
                      font-size: 20px;
                      font-family: montE;
                    `}>
                    Загальна кількість опадів: {day.day.totalprecip_mm} mm
                  </Typography>
                  <Typography css={css`
                      font-size: 20px;
                      font-family: montE;
                    `}>
                    Вірогідність дощу {ifRainOrSnow(day.day.daily_will_it_rain)}
                  </Typography>
                  <Typography css={css`
                      font-size: 20px;
                      font-family: montE;
                    `}>
                    Вірогідність опадів в виді снігу {ifRainOrSnow(day.day.daily_will_it_rain)}
                  </Typography>
                </Box>
              </Box>
            )
        )}
      </Box>
    </div>
  );
});

export default WeeklyWeather;
