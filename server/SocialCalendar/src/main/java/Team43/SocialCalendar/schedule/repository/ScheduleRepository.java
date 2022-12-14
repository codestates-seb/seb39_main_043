package Team43.SocialCalendar.schedule.repository;

import Team43.SocialCalendar.schedule.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    List<Schedule> findScheduleByCalendar_CalendarId(Long calendarId);
}
