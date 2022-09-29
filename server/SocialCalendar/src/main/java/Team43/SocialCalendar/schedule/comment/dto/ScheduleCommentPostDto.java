package Team43.SocialCalendar.schedule.comment.dto;

import lombok.Getter;

@Getter
public class ScheduleCommentPostDto {

    private Long scheduleId;
    private Long memberId;
    private String contents;
}
