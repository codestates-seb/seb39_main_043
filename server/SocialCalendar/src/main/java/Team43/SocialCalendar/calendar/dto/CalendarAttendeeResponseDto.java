package Team43.SocialCalendar.calendar.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CalendarAttendeeResponseDto {

    private long calendarAttendeeId;
//    private long calendarId;
//    private String title;
    private long memberId;
    private String email;
    private String name;
    private String memberImg;
}
