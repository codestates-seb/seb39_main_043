package Team43.SocialCalendar.calendar.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class CalendarAttendeeDto {

    @Positive
    private long memberId;
}
