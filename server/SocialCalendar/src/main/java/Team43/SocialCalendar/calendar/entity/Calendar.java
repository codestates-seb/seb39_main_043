package Team43.SocialCalendar.calendar.entity;

import Team43.SocialCalendar.audit.Auditable;
import Team43.SocialCalendar.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Calendar extends Auditable {

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


    public void setMember(Member memberId) {
        this.memberId = memberId;
    }
}
