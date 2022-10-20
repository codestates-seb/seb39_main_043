package Team43.SocialCalendar.schedule.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ScheduleCommentResponseDto {

    private Long scheduleCommentId;
    private Long scheduleId;
    private Long memberId;
    private String name;
    private String img;
    private String contents;



}
