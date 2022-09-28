package Team43.SocialCalendar.schedule.comment.entity;

import Team43.SocialCalendar.common.BaseEntity;
import Team43.SocialCalendar.schedule.entity.Schedule;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ScheduleComment extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scheduleCommentId;

    @Column(length = 100)
    private String contents;

    public ScheduleComment(Long scheduleCommentId, String contents) {
        this.scheduleCommentId = scheduleCommentId;
        this.contents = contents;
    }

    @ManyToOne
    @JoinColumn(name = "schedule_id")
    private Schedule schedule;

    public void setSchedule(Schedule schedule) {

        if (this.schedule != null) {
            this.schedule.getScheduleComments().remove(this);
        }

        this.schedule = schedule;
        if (!schedule.getScheduleComments().contains(this)) {
            schedule.getScheduleComments().add(this);
        }
    }
}
