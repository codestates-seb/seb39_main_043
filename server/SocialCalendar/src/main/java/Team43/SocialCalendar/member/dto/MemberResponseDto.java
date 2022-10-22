package Team43.SocialCalendar.member.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class MemberResponseDto {

    private long memberId;
    private String email;
    private String name;
    private String memberImg;
    private String statusMessage;

    private List<AdminCalendarResponseDto> adminCalendars;

    private List<AttendedCalendarResponseDto> attendedCalendars;

    private LocalDateTime createdAt;
}
