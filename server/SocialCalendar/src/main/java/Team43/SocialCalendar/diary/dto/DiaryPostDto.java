package Team43.SocialCalendar.diary.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class DiaryPostDto {

    @Positive
    private long scheduleId;

    @Positive
    private long memberId;

    private String contents;

    private String diaryImg;
}
