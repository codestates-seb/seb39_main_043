package Team43.SocialCalendar.calendar.dto;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.member.entity.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddCalendarAttendeeResponseDto {

    private long calendarAttendeeId;

    @Setter(AccessLevel.NONE)
    private long calendarId;
    private String title;

    @Setter(AccessLevel.NONE)
    private long memberId;
    private String email;
    private String name;


    public void setCalendar(Calendar calendar) {
        this.calendarId = calendar.getCalendarId();
    }

    public void setMember(Member member) {
        this.memberId = member.getMemberId();
    }
}
