package Team43.SocialCalendar.member.dto;

import Team43.SocialCalendar.calendar.entity.Calendar;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

//@AllArgsConstructor
@Getter
@Setter
public class MemberResponseDto {

    private long memberId;
    private String email;
    private String name;
    private String password;
    private String memberImg;

    private List<AdminCalendarResponseDto> adminCalendars;

    private List<AttendedCalendarResponseDto> attendedCalendars;

    private LocalDateTime createdAt;
}
