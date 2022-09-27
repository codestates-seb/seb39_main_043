package Team43.SocialCalendar.calendar.dto;

import Team43.SocialCalendar.member.entity.Member;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.util.List;

@Getter
public class CalendarPostDto {

    @Positive
    private long memberId;

    @NotBlank
    private String title;

//    private List<CalendarAttendeeDto> calendarAttendees;

    public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }
}
