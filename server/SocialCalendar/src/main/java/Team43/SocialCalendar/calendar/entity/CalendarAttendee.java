package Team43.SocialCalendar.calendar.entity;

import Team43.SocialCalendar.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class CalendarAttendee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long calendarAttendeeId;

    @ManyToOne
    @JoinColumn(name = "calendar_id")
    private Calendar calendarId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member memberId;

    public void addCalendar(Calendar calendar) {
        this.calendarId = calendar;
        if (!this.calendarId.getCalendarAttendees().contains(this)) {
            this.calendarId.getCalendarAttendees().add(this);
        }
    }

    public void addMember(Member member) {
        this.memberId = member;
        if (!this.memberId.getCalendarAttendees().contains(this)) {
            this.memberId.addCalendarAttendee(this);
        }
    }
}
