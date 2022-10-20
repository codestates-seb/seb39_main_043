package Team43.SocialCalendar.calendar.repository;

import Team43.SocialCalendar.calendar.entity.CalendarAttendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalendarAttendeeRepository extends JpaRepository<CalendarAttendee, Long> {
}
