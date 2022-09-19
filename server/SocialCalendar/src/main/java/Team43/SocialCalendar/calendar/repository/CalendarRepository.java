package Team43.SocialCalendar.calendar.repository;

import Team43.SocialCalendar.calendar.entity.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalendarRepository extends JpaRepository<Calendar, Long> {
}
