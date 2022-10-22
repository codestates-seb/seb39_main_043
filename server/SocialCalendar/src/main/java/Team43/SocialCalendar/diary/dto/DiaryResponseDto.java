package Team43.SocialCalendar.diary.dto;

import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.schedule.entity.Schedule;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class DiaryResponseDto {

    private long diaryId;
    private String contents;
    private String diaryImg;

    @Setter(AccessLevel.NONE)
    private long scheduleId;

    @Setter(AccessLevel.NONE)
    private long memberId;
    private String name;
    private String memberImg;

    private LocalDateTime createdAt;


    public void setSchedule(Schedule schedule) {
        this.scheduleId = schedule.getScheduleId();
    }

    public void setMember(Member member) {
        this.memberId = member.getMemberId();
    }
}
