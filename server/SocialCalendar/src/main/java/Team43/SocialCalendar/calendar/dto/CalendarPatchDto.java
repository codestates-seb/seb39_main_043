package Team43.SocialCalendar.calendar.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class CalendarPatchDto {
    private long calendarId;

    @NotBlank
    private String title;

    private String calendarImg;

    public void setCalendarId(long calendarId) {
        this.calendarId = calendarId;
    }
}
