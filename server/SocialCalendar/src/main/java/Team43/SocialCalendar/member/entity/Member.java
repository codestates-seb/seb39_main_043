package Team43.SocialCalendar.member.entity;

import Team43.SocialCalendar.calendar.entity.CalendarAttendee;
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
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(length = 500)
    private String memberImg;

    @Column(length = 100, nullable = false)
    private String email;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 100, nullable = false)
    private String password;

    @Column(length = 50)
    private String statusMessage;

    @OneToMany(mappedBy = "memberId")
    private List<CalendarAttendee> calendarAttendees = new ArrayList<>();

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();


    public void addCalendarAttendee(CalendarAttendee calendarAttendee) {
        this.calendarAttendees.add(calendarAttendee);
        if (calendarAttendee.getMemberId() != this) {
            calendarAttendee.addMember(this);
        }
    }
}
