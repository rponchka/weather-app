import { css } from "@emotion/react";
import { FC } from "react";
import { formatDate } from "../utils/formateDate";

interface IForecast {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface IListProps {
  data: IForecast;
}

const List: FC<IListProps> = ({ data }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        font-size:25px;
        margin:10px 0;
      `}
    >
      {formatDate(data.date)}
      <span>
        {data.day.mintemp_c + 'C '}

        <span css={css`font-family:arial;`}>/</span>

        {data.day.maxtemp_c + 'C'}
      </span>
    </div>
  );
};

export default List;
