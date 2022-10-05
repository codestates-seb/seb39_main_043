import axios from "axios";
import { useEffect, useFocusEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React from "react";

const CurrentCalendarTitleWrapeer = styled.div`
  font-size: 16px;

  .current-calendar-text {
    font-weight: bold;
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
      <span>{data.title}</span>
    </CurrentCalendarTitleWrapeer>
  );
};

export default CurrentCalendarTitle;
