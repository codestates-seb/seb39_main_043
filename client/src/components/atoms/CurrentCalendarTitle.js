import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import React from 'react';

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

const getCalendar = async (calendarId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/calendars/${calendarId}`);
  return data;
};

const CurrentCalendarTitle = ({ className }) => {
  const selectedState = useSelector((state) => state.selected);
  const calendar = useQuery(['calendar', selectedState.calendarId], () => getCalendar(selectedState.calendarId));
  if (calendar.isLoading) return <h3>Loading...</h3>;
  if (calendar.isError)
    return (
      <>
        <h3>current calendar title error</h3>
        <p>{calendar.error.toString()}</p>
      </>
    );

  return (
    <CurrentCalendarTitleWrapeer className={className}>
      <span className="current-calendar-text">현재 캘린더 </span>
      <span className="calendar-title">{calendar.data.title}</span>
    </CurrentCalendarTitleWrapeer>
  );
};

export default CurrentCalendarTitle;
