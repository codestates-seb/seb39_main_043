package Team43.SocialCalendar.calendar.service;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.repository.CalendarRepository;
import Team43.SocialCalendar.exception.BusinessLogicException;
import Team43.SocialCalendar.exception.ExceptionCode;
import Team43.SocialCalendar.member.service.MemberService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CalendarService {

    private final MemberService memberService;

    private final CalendarRepository calendarRepository;

    public CalendarService(MemberService memberService,
                           CalendarRepository calendarRepository) {
        this.memberService = memberService;
        this.calendarRepository = calendarRepository;
    }

    public Calendar createCalendar(Calendar calendar) {
        verifyCalendar(calendar);
        Calendar savedCalendar = saveCalendar(calendar);

        return savedCalendar;
    }

    public Calendar findCalendar(long calendarId) {
        return findVerifiedCalendar(calendarId);
    }

    public List<Calendar> findCalendars() {
        return (List<Calendar>) calendarRepository.findAll();
    }

    public Calendar updateCalendar(Calendar calendar) {
        Calendar findCalendar = findVerifiedCalendar(calendar.getCalendarId());

        Optional.ofNullable(calendar.getTitle()).ifPresent(title -> findCalendar.setTitle(title));
        Optional.ofNullable(calendar.getCalendarImg()).ifPresent(image -> findCalendar.setCalendarImg(image));
        findCalendar.setModifiedAt(LocalDateTime.now());

        return calendarRepository.save(findCalendar);
    }

    public void deleteCalendar(long calendarId) {
        Calendar calendar = findVerifiedCalendar(calendarId);
        calendarRepository.delete(calendar);
    }


    // 존재하는 회원인지 검증하는 메서드를 캘린더 서비스에서도 쓰기 위한 메서드
    private void verifyCalendar(Calendar calendar) {
        // 회원이 존재하는지 확인
        memberService.findVerifiedMember(calendar.getMemberId().getMemberId());
    }

    // 존재하는 캘린더인지 확인
    public Calendar findVerifiedCalendar(long calendarId) {
        Optional<Calendar> optionalCalendar = calendarRepository.findById(calendarId);
        Calendar findCalendar =
                optionalCalendar.orElseThrow(() -> new BusinessLogicException(ExceptionCode.CALENDAR_NOT_FOUND));

        return findCalendar;
    }


    private Calendar saveCalendar(Calendar calendar) {
        return calendarRepository.save(calendar);
    }

}
