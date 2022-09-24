package Team43.SocialCalendar.calendar.entity;

import Team43.SocialCalendar.audit.Auditable;
import Team43.SocialCalendar.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

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


    public void setMember(Member memberId) {
        this.memberId = memberId;
    }
}
