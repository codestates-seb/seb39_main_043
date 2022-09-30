package Team43.SocialCalendar.diary.entity;

import Team43.SocialCalendar.diary.comment.entity.DiaryComment;
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
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long diaryId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(length = 1000)
    private String contents;

    @Column(length = 100)
    private String diaryImg;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    public Diary(Long diaryId, String title, String contents, String diaryImg) {
        this.diaryId = diaryId;
        this.title = title;
        this.contents = contents;
        this.diaryImg = diaryImg;
    }

    @OneToMany(mappedBy = "diary")
    private List<DiaryComment> diaryComments = new ArrayList<>();

    public void addDiaryComment(DiaryComment diaryComment) {

        this.diaryComments.add(diaryComment);
        if (diaryComment.getDiary() != this) {
            diaryComment.setDiary(this);
        }
    }

    @OneToOne
    @JoinColumn(name = "schedule_id")
    private Schedule schedule;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void setMember(Member member) {

        this.member = member;
        if (!member.getDiaries().contains(this)) {
            member.getDiaries().add(this);
        }
    }
}
