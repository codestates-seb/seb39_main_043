package Team43.SocialCalendar.schedule.entity;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.common.BaseEntity;
import Team43.SocialCalendar.diary.entity.Diary;
import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.schedule.comment.entity.ScheduleComment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scheduleId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(length = 100, nullable = false)
    private String attendees;

    @Column(length = 100, nullable = false)
    private String scheduleAt;

    @Column(length = 100)
    private String location;

    @Column(length = 100)
    private String contents;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "schedule")
    private List<ScheduleComment> scheduleComments = new ArrayList<>();

    public void addScheduleComment(ScheduleComment scheduleComment) {

        this.scheduleComments.add(scheduleComment);
        if (scheduleComment.getSchedule() != this) {
            scheduleComment.setSchedule(this);
        }
    }

    @OneToOne
    @JoinColumn(name = "diary_id")
    private Diary diary;

    public void setDiary(Diary diary) {
        this.diary = diary;
        diary.setSchedule(this);
    }

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void setMember(Member member) {

        this.member = member;
        if (!member.getSchedules().contains(this)) {
            member.getSchedules().add(this);
        }
    }

    @ManyToOne
    @JoinColumn(name = "calendar_id")
    private Calendar calendar;

    public void setCalendar(Calendar calendar) {

        this.calendar = calendar;
        if (!calendar.getSchedules().contains(this)) {
            calendar.getSchedules().add(this);
        }
    }
}
