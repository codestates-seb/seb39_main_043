package Team43.SocialCalendar.calendar.dto;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.user.entity.User;
import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class UserCalendarMemberDto {

    private long calendarId;

    private long memberId;

    public Calendar getCalendar() {
        Calendar calendar = new Calendar();
        calendar.setCalendarId(calendarId);
        return calendar;
    }
}
