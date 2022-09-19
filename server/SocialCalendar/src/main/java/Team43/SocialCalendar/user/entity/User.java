package Team43.SocialCalendar.user.entity;

import Team43.SocialCalendar.audit.Auditable;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.entity.UserCalendarMember;
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
@Entity(name = "user")
public class User extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(length = 100)
    private String userImg;

    @Column(length = 100, nullable = false)
    private String email;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 100, nullable = false)
    private String password;

    @Column(length = 50)
    private String statusMessage;

    @OneToMany(mappedBy = "calendarMasterIdfk", cascade = CascadeType.ALL)
    private List<Calendar> calendarMasters = new ArrayList<>();

    @OneToMany(mappedBy = "memberIdfk", cascade = CascadeType.ALL)
    private List<UserCalendarMember> calendarMembers = new ArrayList<>();

    public void addCalendarMaster(Calendar calendar) {

        calendarMasters.add(calendar);
        if (calendar.getCalendarMasterIdfk() != this) {
            calendar.setMaster(this);
        }
    }

    public void addCalendarMember(UserCalendarMember member) {

        this.calendarMembers.add(member);
        if (member.getMemberIdfk() != this) {
            member.setMember(this);
        }
    }

//    public void addMastersCalendar(Calendar mastersCalendar) {
//        this.mastersCalendar.add(mastersCalendar);
//        if (mastersCalendar.getCalendarMasterIdfk() != this) {
//        }
//    }
}
