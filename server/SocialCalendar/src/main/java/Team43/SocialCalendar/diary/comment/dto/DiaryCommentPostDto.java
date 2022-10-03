package Team43.SocialCalendar.diary.comment.dto;

import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
public class DiaryCommentPostDto {

    @Positive
    private long diaryId;
    @Positive
    private long memberId;
    private String contents;
}
