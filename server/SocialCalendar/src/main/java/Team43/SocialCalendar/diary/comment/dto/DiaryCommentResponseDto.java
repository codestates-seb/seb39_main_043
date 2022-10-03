package Team43.SocialCalendar.diary.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
public class DiaryCommentResponseDto {

    private long diaryCommentId;
    private long diaryId;
    private long memberId;
    private String name;
    private String img;
    private String contents;
}
