package Team43.SocialCalendar.diary.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class DiaryPatchDto {

    @Positive
    private long diaryId;

    private String contents;

    private String diaryImg;


    public void setDiaryId(long diaryId) {
        this.diaryId = diaryId;
    }
}
