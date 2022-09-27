package Team43.SocialCalendar.diary.comment.entity;

import Team43.SocialCalendar.diary.entity.Diary;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class DiaryComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long diaryCommentId;

    @Column(length = 1000)
    private String contents;

    public DiaryComment(Long diaryCommentId, String contents) {
        this.diaryCommentId = diaryCommentId;
        this.contents = contents;
    }

    @ManyToOne
    @JoinColumn(name = "diary_id")
    private Diary diary;

    public void setDiary(Diary diary) {

        if (this.diary != null) {
            this.diary.getDiaryComments().remove(this);
        }

        this.diary = diary;
        if (!diary.getDiaryComments().contains(this)) {
            diary.getDiaryComments().add(this);
        }
    }
}
