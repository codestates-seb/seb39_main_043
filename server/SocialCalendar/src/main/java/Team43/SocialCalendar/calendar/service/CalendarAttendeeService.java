package Team43.SocialCalendar.calendar.service;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.entity.CalendarAttendee;
import Team43.SocialCalendar.calendar.repository.CalendarAttendeeRepository;
import Team43.SocialCalendar.exception.BusinessLogicException;
import Team43.SocialCalendar.exception.ExceptionCode;
import Team43.SocialCalendar.member.service.MemberService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CalendarAttendeeService {

    private final MemberService memberService;

    private final CalendarService calendarService;

    private final CalendarAttendeeRepository calendarAttendeeRepository;

    public CalendarAttendeeService(MemberService memberService,
                                   CalendarService calendarService,
                                   CalendarAttendeeRepository calendarAttendeeRepository) {
        this.memberService = memberService;
        this.calendarService = calendarService;
        this.calendarAttendeeRepository = calendarAttendeeRepository;
    }

    public CalendarAttendee createCalendarAttendee(CalendarAttendee calendarAttendee) {
        verifyMember(calendarAttendee);
        verifyCalendar(calendarAttendee);

        CalendarAttendee savedCalendarAttendee = saveCalendarAttendee(calendarAttendee);

        return savedCalendarAttendee;
    }

    public void deleteCalendarAttendee(long calendarAttendeeId) {
        CalendarAttendee calendarAttendee = findVerifiedCalendarAttendee(calendarAttendeeId);
        calendarAttendeeRepository.delete(calendarAttendee);
    }


    // 존재하는 회원인지 검증하는 메서드를 CalendarAttendeeService에서도 쓰기 위한 메서드
    private void verifyMember(CalendarAttendee calendarAttendee) {
        // 회원이 존재하는지 확인
        memberService.findVerifiedMember(calendarAttendee.getMemberId().getMemberId());
    }

    // 존재하는 캘린더인지 검증하는 메서드를 CalendarAttendeeService에서도 쓰기 위한 메서드
    private void verifyCalendar(CalendarAttendee calendarAttendee) {
        // 캘린더가 존재하는지 확인
        calendarService.findVerifiedCalendar(calendarAttendee.getCalendarId().getCalendarId());
    }

    // 존재하는 CalendarAttendee인지 확인
    public CalendarAttendee findVerifiedCalendarAttendee(long calendarAttendeeId) {
        Optional<CalendarAttendee> optionalCalendarAttendee = calendarAttendeeRepository.findById(calendarAttendeeId);

        CalendarAttendee findCalendarAttendee =
                optionalCalendarAttendee.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.CALENDAR_ATTENDEE_NOT_FOUND));

        return findCalendarAttendee;
    }

    private CalendarAttendee saveCalendarAttendee(CalendarAttendee calendarAttendee) {
        return calendarAttendeeRepository.save(calendarAttendee);
    }
}
