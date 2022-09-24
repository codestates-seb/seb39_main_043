package Team43.SocialCalendar.calendar.controller;

import Team43.SocialCalendar.calendar.dto.CalendarPostDto;
import Team43.SocialCalendar.calendar.dto.CalendarResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.mapper.CalendarMapper;
import Team43.SocialCalendar.calendar.service.CalendarService;
import Team43.SocialCalendar.member.service.MemberService;
import Team43.SocialCalendar.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/calendars")
public class CalendarController {
    private final CalendarService calendarService;
    private final CalendarMapper mapper;
    private final MemberService memberService;

    public CalendarController(CalendarService calendarService,
                              CalendarMapper mapper,
                              MemberService memberService) {
        this.calendarService = calendarService;
        this.mapper = mapper;
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity postCalendar(@RequestBody CalendarPostDto calendarPostDto) {
        Calendar calendar = calendarService.createCalendar(mapper.calendarPostDtoToCalendar(calendarPostDto));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.calendarToCalendarResponseDto(calendar)), HttpStatus.CREATED);
    }

    @GetMapping("/{calendar-id}")
    public ResponseEntity getCalendar(@PathVariable("calendar-id") @Positive long calendarId) {
        Calendar calendar = calendarService.findCalendar(calendarId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.calendarToCalendarResponseDto(calendar)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getCalendars() {
        List<Calendar> calendars = calendarService.findCalendars();

        return new ResponseEntity<>(calendars, HttpStatus.OK);
    }
}
