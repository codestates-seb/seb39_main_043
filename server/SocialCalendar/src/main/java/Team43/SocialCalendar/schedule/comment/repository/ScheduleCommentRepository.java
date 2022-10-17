package Team43.SocialCalendar.schedule.comment.repository;

import Team43.SocialCalendar.schedule.comment.entity.ScheduleComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScheduleCommentRepository extends JpaRepository<ScheduleComment, Long> {

    List<ScheduleComment> findScheduleCommentBySchedule_ScheduleId(long scheduleId);
}
