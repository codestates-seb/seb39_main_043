package Team43.SocialCalendar.schedule.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ScheduleResponseDto {

    private Long scheduleId;
    private String title;
    private String scheduleAt;
    private String attendees;
    private String location;
    private String contents;
}
