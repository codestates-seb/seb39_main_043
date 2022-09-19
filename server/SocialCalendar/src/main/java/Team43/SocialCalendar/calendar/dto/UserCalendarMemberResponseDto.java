package Team43.SocialCalendar.calendar.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserCalendarMemberResponseDto {

    private long calendarId;

    private long memberId;

    private String memberName;

    private String memberEmail;
}
