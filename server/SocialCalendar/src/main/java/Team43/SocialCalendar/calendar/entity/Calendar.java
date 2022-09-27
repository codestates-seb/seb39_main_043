package Team43.SocialCalendar.calendar.entity;

import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.schedule.entity.Schedule;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Calendar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long calendarId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member memberId;

    @Column(length = 20, nullable = false)
    private String title;

    @Column(length = 500)
    private String calendarImg;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "calendarId", cascade = CascadeType.ALL)
    private List<CalendarAttendee> calendarAttendees = new ArrayList<>();

    public void addCalendarAttendee(CalendarAttendee calendarAttendee) {
        this.calendarAttendees.add(calendarAttendee);
        if (calendarAttendee.getCalendarId() != this) {
            calendarAttendee.addCalendar(this);
        }
    }

    @OneToMany(mappedBy = "calendar")
    private List<Schedule> schedules = new ArrayList<>();

    public void addSchedule(Schedule schedule) {

        this.schedules.add(schedule);
        if (schedule.getCalendar() != this) {
            schedule.setCalendar(this);
        }
    }

    public void setMember(Member memberId) {
        this.memberId = memberId;
    }
}
