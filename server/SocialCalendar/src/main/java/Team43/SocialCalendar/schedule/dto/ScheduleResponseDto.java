package Team43.SocialCalendar.schedule.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ScheduleResponseDto {

    private Long memberId;
    private Long calendarId;

    private Long scheduleId;
    private String title;
    private String scheduleAt;
    private String attendees;
    private String location;
    private String contents;

    private Long diaryInfo;
}
