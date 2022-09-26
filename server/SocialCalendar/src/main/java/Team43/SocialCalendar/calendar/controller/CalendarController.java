package Team43.SocialCalendar.calendar.controller;

import Team43.SocialCalendar.calendar.dto.AddCalendarAttendeeDto;
import Team43.SocialCalendar.calendar.dto.CalendarPatchDto;
import Team43.SocialCalendar.calendar.dto.CalendarPostDto;
import Team43.SocialCalendar.calendar.dto.CalendarResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.entity.CalendarAttendee;
import Team43.SocialCalendar.calendar.mapper.CalendarAttendeeMapper;
import Team43.SocialCalendar.calendar.mapper.CalendarMapper;
import Team43.SocialCalendar.calendar.service.CalendarAttendeeService;
import Team43.SocialCalendar.calendar.service.CalendarService;
import Team43.SocialCalendar.member.service.MemberService;
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

    private final CalendarAttendeeService calendarAttendeeService;

    private final CalendarAttendeeMapper calendarAttendeeMapper;

    public CalendarController(CalendarService calendarService,
                              CalendarMapper mapper,
                              MemberService memberService,
                              CalendarAttendeeService calendarAttendeeService,
                              CalendarAttendeeMapper calendarAttendeeMapper) {
        this.calendarService = calendarService;
        this.mapper = mapper;
        this.memberService = memberService;
        this.calendarAttendeeService = calendarAttendeeService;
        this.calendarAttendeeMapper = calendarAttendeeMapper;
    }

    @PostMapping
    public ResponseEntity postCalendar(@RequestBody CalendarPostDto calendarPostDto) {
        Calendar calendar = calendarService.createCalendar(mapper.calendarPostDtoToCalendar(calendarPostDto));

        return new ResponseEntity<>(mapper.calendarToCalendarResponseDto(calendar), HttpStatus.CREATED);
    }

    @GetMapping("/{calendar-id}")
    public ResponseEntity getCalendar(@PathVariable("calendar-id") @Positive long calendarId) {
        Calendar calendar = calendarService.findCalendar(calendarId);

        return new ResponseEntity<>(mapper.calendarToCalendarResponseDto(calendar), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getCalendars() {
        List<Calendar> calendars = calendarService.findCalendars();
        List<CalendarResponseDto> response = mapper.calendarsToCalendarResponseDtos(calendars);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{calendar-id}")
    public ResponseEntity patchCalendar(@PathVariable("calendar-id") @Positive long calendarId,
                                        @RequestBody CalendarPatchDto calendarPatchDto) {
        calendarPatchDto.setCalendarId(calendarId);
        Calendar calendar = calendarService.updateCalendar(mapper.calendarPatchDtoToCalendar(calendarPatchDto));

        return new ResponseEntity<>(mapper.calendarToCalendarResponseDto(calendar), HttpStatus.OK);
    }

    @DeleteMapping("/{calendar-id}")
    public ResponseEntity deleteCalendar(@PathVariable("calendar-id") long calendarId) {
        calendarService.deleteCalendar(calendarId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/attendees")
    public ResponseEntity postCalendarAttendee(@RequestBody AddCalendarAttendeeDto addCalendarAttendeeDto) {
        CalendarAttendee calendarAttendee = calendarAttendeeService.createCalendarAttendee(
                calendarAttendeeMapper.addCalendarAttendeeDtoToCalendarAttendee(addCalendarAttendeeDto));

        return new ResponseEntity<>(calendarAttendeeMapper.calendarAttendeeToAddCalendarAttendeeResponseDto(
                                                                            calendarAttendee), HttpStatus.CREATED);
    }

}
