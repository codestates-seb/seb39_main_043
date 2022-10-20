package Team43.SocialCalendar.calendar.dto;

import Team43.SocialCalendar.member.entity.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class CalendarResponseDto {

    private long calendarId;
    private String title;
    private String calendarImg;

    @Setter(AccessLevel.NONE)
    private long memberId;
    private String email;
    private String name;
    private String memberImg;

    private List<CalendarAttendeeResponseDto> calendarAttendees;
    private LocalDateTime createdAt;

    public void setMember(Member member) {
        this.memberId = member.getMemberId();
    }
}
