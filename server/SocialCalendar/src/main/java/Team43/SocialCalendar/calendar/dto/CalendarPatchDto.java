package Team43.SocialCalendar.calendar.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
public class CalendarPatchDto {
    private long calendarId;

    @NotBlank
    private String title;

    private String calendarImg;

    private List<CalendarAttendeeDto> calendarAttendees;

    public void setCalendarId(long calendarId) {
        this.calendarId = calendarId;
    }
}
