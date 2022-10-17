package Team43.SocialCalendar.calendar.repository;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar, Long> {

}
