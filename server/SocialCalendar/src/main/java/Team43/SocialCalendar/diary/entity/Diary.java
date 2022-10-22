package Team43.SocialCalendar.diary.entity;

import Team43.SocialCalendar.diary.comment.entity.DiaryComment;
import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.schedule.entity.Schedule;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
<<<<<<< HEAD
import java.time.LocalDateTime;
=======
>>>>>>> 1c376a6 (back/refactor: merge 후 build)
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

    @Column(length = 1000)
    private String contents;

    @Column(length = 100)
    private String diaryImg;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column
    private LocalDateTime modifiedAt = LocalDateTime.now();

    public Diary(Long diaryId, String contents, String diaryImg) {
        this.diaryId = diaryId;
        this.contents = contents;
        this.diaryImg = diaryImg;
    }

    @OneToMany(mappedBy = "diary", cascade = CascadeType.REMOVE)
    private List<DiaryComment> diaryComments = new ArrayList<>();

    public void addDiaryComment(DiaryComment diaryComment) {

        this.diaryComments.add(diaryComment);
        if (diaryComment.getDiary() != this) {
            diaryComment.setDiary(this);
        }
    }

    @OneToOne
    @JoinColumn(name = "schedule_id", nullable = true)
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
