package Team43.SocialCalendar.member.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class AdminCalendarResponseDto {

    private long adminCalendarId;
    private String title;
    private String calendarImg;
}
