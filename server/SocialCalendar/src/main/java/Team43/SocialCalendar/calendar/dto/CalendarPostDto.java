package Team43.SocialCalendar.calendar.dto;

import Team43.SocialCalendar.user.entity.User;
import lombok.Getter;

import javax.validation.constraints.Positive;
import java.util.List;

@Getter
public class CalendarPostDto {

    private long calendarMasterId;

    private String title;

    private List<UserCalendarMemberDto> calendarMembers;


    public User getMaster() {
        User master = new User();
        master.setUserId(calendarMasterId);
        return master;
    }
}
