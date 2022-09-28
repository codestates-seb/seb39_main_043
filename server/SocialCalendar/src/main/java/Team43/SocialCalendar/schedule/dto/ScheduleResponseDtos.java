package Team43.SocialCalendar.schedule.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ScheduleResponseDtos {

    private Long memberId;
    private Long calendarId;
    private Long scheduleId;
    private String title;
}
