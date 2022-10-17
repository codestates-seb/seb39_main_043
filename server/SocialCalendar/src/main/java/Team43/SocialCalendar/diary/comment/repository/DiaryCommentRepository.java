package Team43.SocialCalendar.diary.comment.repository;

import Team43.SocialCalendar.diary.comment.entity.DiaryComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiaryCommentRepository extends JpaRepository<DiaryComment, Long> {

    List<DiaryComment> findDiaryCommentByDiary_DiaryId(long diaryId);
}
