package Team43.SocialCalendar.schedule.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
<<<<<<< HEAD
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ScheduleResponseDto {

    private Long memberId;
    private Long calendarId;

=======

@Getter
@AllArgsConstructor
public class ScheduleResponseDto {

>>>>>>> 1c376a6 (back/refactor: merge 후 build)
    private Long scheduleId;
    private String title;
    private String scheduleAt;
    private String attendees;
    private String location;
    private String contents;
<<<<<<< HEAD

    private Long diaryInfo;
=======
>>>>>>> 1c376a6 (back/refactor: merge 후 build)
}
