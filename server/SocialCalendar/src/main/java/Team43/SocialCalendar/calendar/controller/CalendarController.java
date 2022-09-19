package Team43.SocialCalendar.calendar.controller;

import Team43.SocialCalendar.calendar.dto.CalendarPostDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.mapper.CalendarMapper;
import Team43.SocialCalendar.calendar.service.CalendarService;
import Team43.SocialCalendar.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calendars")
public class CalendarController {
    private final CalendarService calendarService;
    private final CalendarMapper mapper;

    public CalendarController(CalendarService calendarService,
                              CalendarMapper mapper) {
        this.calendarService = calendarService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postCalendar(@RequestBody CalendarPostDto calendarPostDto) {
        Calendar calendar = calendarService.createCalendar(mapper.calendarPostDtoToCalendar(calendarPostDto));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.calendarToCalendarResponseDto(calendar)), HttpStatus.CREATED);
    }
}
