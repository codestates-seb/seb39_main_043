package Team43.SocialCalendar.calendar.entity;

import Team43.SocialCalendar.audit.Auditable;
import Team43.SocialCalendar.user.entity.User;
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
@Entity(name = "calendar")
public class Calendar extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long calendarId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User calendarMasterIdfk;

    @Column(length = 20, nullable = false)
    private String title;

    @Column(length = 100)
    private String calendarImg;


    @OneToMany(mappedBy = "memberIdfk", cascade = CascadeType.ALL)
    private List<UserCalendarMember> userCalendarMembers = new ArrayList<>();

    public void setMaster(User master) {
        this.calendarMasterIdfk = master;
    }



//    public void addMaster(User master) {
//        this.calendarMasterIdfk = master;
//        if (!this.calendarMasterIdfk.getMastersCalendar().contains(this)) {
//            this.calendarMasterIdfk.getMastersCalendar().add(this);
//        }
//    }
}
