package Team43.SocialCalendar.diary.repository;

import Team43.SocialCalendar.diary.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
