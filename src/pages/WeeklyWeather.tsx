import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { css } from "@emotion/react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { formatDate } from "../utils/formateDate";
import { IconTemperature, IconTemperatureCelsius } from "@tabler/icons-react";
import { forecastStore } from "../store/forecastStore";
import { cityStore } from "../store/cityStore";

const WeeklyWeather: FC = observer(() => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
        forecastStore.fetchWeather(cityStore.city)
  },[cityStore.city])

  const ifRainOrSnow = (value: number) => {
    if (value === 0) {
      return "немає";
    } else {
      return "є";
    }
  };

  if (forecastStore.isLoading) {
    return <div>Loading...</div>;
  }

  const containerStyle = css`
    width: var(--page-width);
    height: var(--page-height);
    padding: var(--page-padding);
    padding-top: 50px;
    box-sizing: border-box;
    color: var(--font-color);
  `;

  const typographyStyle = css`
  font-size: 20px;
  font-family: var(--light-font);
`

const typographyTitleStyle = css`
  font-size: 25px;
  font-family: var(--bold-font);
`

  return (
    <div css={containerStyle}>
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
          borderBottom: "1px solid var(--box-bg-color)",
          fontFamily: "montH",
        }}
      >
        {forecastStore.weatherData?.forecast.forecastday.map((day: any, index: number) => (
          <Tab
            sx={{ color: "var(--font-color)", fontFamily: "var(--bold-font)" }}
            key={index}
            label={formatDate(day.date)}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          padding: 3,
          background: "var(--dark-box-bg-color)",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        {forecastStore.weatherData?.forecast.forecastday.map(
          (day: any, index: number) =>
            value === index && (
              <Box
                key={index}
                css={css`
                  font-family: var(--light-font);
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
                    <Typography css={typographyTitleStyle}>
                      Денна температура
                    </Typography>
                    <IconTemperature stroke={1.5} width={30} height={30} />
                  </div>
                  
                  <div
                    css={css`
                      font-family: var(--bold-font);
                      font-size: 30px;
                      display: flex;
                      align-items: center;
                    `}
                  >
                    {day.day.avgtemp_c}
                    <IconTemperatureCelsius stroke={2.5} width={32}  height={32} />
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
                  <Typography css={typographyTitleStyle}>
                    Погодні умови
                  </Typography>

                  <Typography css={typographyStyle}>
                    Максимальна швидкість вітру: {day.day.maxwind_kph}км
                    <span  css={css`font-family: arial;`}>/</span>
                  </Typography>

                  <Typography css={typographyStyle}>
                    Загальна кількість опадів: {day.day.totalprecip_mm} mm
                  </Typography>

                  <Typography css={typographyStyle}>
                    Вірогідність дощу {ifRainOrSnow(day.day.daily_will_it_rain)}
                  </Typography>

                  <Typography css={typographyStyle}>
                    Вірогідність опадів в виді снігу{" "}
                    {ifRainOrSnow(day.day.daily_will_it_rain)}
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
