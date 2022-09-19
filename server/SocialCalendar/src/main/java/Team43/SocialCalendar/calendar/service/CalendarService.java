package Team43.SocialCalendar.calendar.service;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.repository.CalendarRepository;
import Team43.SocialCalendar.exception.BusinessLogicException;
import Team43.SocialCalendar.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CalendarService {

    private final CalendarRepository calendarRepository;


    public CalendarService(CalendarRepository calendarRepository) {
        this.calendarRepository = calendarRepository;
    }

    public Calendar createCalendar(Calendar calendar) {
        Calendar savedCalendar = saveCalendar(calendar);

        return savedCalendar;
    }

    public Calendar findCalendar(long calendarId) {
        return findVerifiedCalendar(calendarId);
    }

    public List<Calendar> findCalendars() {
        return (List<Calendar>) calendarRepository.findAll();
    }


    private Calendar saveCalendar(Calendar calendar) {

        return calendarRepository.save(calendar);
    }

    private Calendar findVerifiedCalendar(long calendarId) {
        Optional<Calendar> optionalCalendar = calendarRepository.findById(calendarId);
        Calendar findCalendar = optionalCalendar.orElseThrow(() ->
                                new BusinessLogicException(ExceptionCode.CALENDAR_NOT_FOUND));
        return findCalendar;
    }
}
