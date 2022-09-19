package Team43.SocialCalendar.calendar.dto;

import Team43.SocialCalendar.user.entity.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class CalendarResponseDto {

    private long calendarId;

    @Setter(AccessLevel.NONE)
    private long calendarMasterId;

    private String title;

    private String calendarImg;

    private List<UserCalendarMemberResponseDto> calendarMembers;

    private LocalDateTime createdAt;


    public void setCalendarMaster(User master) {
        this.calendarMasterId = master.getUserId();
    }

}
