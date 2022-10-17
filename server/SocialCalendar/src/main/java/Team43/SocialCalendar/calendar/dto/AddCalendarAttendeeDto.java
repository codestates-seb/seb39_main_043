package Team43.SocialCalendar.calendar.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class AddCalendarAttendeeDto {

    @Positive
    private long calendarId;

    @Positive
    private long memberId;
}
