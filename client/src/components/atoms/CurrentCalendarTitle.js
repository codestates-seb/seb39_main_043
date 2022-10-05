import axios from "axios";
import { useEffect, useFocusEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React from "react";

const CurrentCalendarTitleWrapeer = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;

  .current-calendar-text {
    font-weight: bold;
  }
  .calendar-title {
    width: 110px;
    margin-left: 5px;
  }
`;

const CurrentCalendarTitle = ({ className }) => {
  const calendar = useSelector((state) => state.calendar);

  const { isLoading, isError, error, data, refetch } = useQuery("calendarName", async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/calendars/${calendar.id}`);
    return data;
  });

  useEffect(() => {
    refetch();
  }, [calendar.id]);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <CurrentCalendarTitleWrapeer className={className}>
      <span className="current-calendar-text">현재 캘린더 </span>
      <span className="calendar-title">{data.title}</span>
    </CurrentCalendarTitleWrapeer>
  );
};

export default CurrentCalendarTitle;
