package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.CalendarPatchDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-24T17:28:16+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class CalendarMapperImpl implements CalendarMapper {

    @Override
    public Calendar calendarPatchDtoToCalendar(CalendarPatchDto calendarPatchDto) {
        if ( calendarPatchDto == null ) {
            return null;
        }

        Calendar calendar = new Calendar();

        calendar.setCalendarId( calendarPatchDto.getCalendarId() );
        calendar.setTitle( calendarPatchDto.getTitle() );
        calendar.setCalendarImg( calendarPatchDto.getCalendarImg() );

        return calendar;
    }
}
