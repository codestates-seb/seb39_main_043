package Team43.SocialCalendar.calendar.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.util.List;

@Getter
public class CalendarPatchDto {
    @Positive
    private long calendarId;

    @NotBlank
    private String title;

    private String calendarImg;

    public void setCalendarId(long calendarId) {
        this.calendarId = calendarId;
    }
}
