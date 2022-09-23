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

    @Setter(AccessLevel.NONE)
    private long memberId;
    private String title;
    private String calendarImg;
    private List<CalendarAttendeeResponseDto> calendarAttendees;
    private LocalDateTime createdAt;


    public void setMember(Member member) {
        this.memberId = member.getMemberId();
    }
}
