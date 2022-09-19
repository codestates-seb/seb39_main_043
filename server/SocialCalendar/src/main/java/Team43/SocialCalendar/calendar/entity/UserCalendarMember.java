package Team43.SocialCalendar.calendar.entity;

import Team43.SocialCalendar.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "user_calendar_member")
public class UserCalendarMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userCalendarMemberId;

    @ManyToOne
    @JoinColumn(name = "calendar_id")
    private Calendar calendarIdfk;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User memberIdfk;


    public void setMember(User member) {
        this.memberIdfk = member;
    }

//    public void addCalendar(Calendar calendar) {
//        this.calendarIdfk = calendar;
//        if (!this.calendarIdfk.)
//    }



    public void addMember(User member) {
        this.memberIdfk = member;
        if (!this.memberIdfk.getCalendarMembers().contains(this)) {
            this.memberIdfk.getCalendarMembers().add(this);
        }
    }
}
