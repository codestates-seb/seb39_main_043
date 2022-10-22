package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.CalendarResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    date = "2022-10-06T17:10:49+0900",
=======
    date = "2022-09-27T18:37:08+0900",
>>>>>>> 1c376a6 (back/refactor: merge 후 build)
=======
    date = "2022-09-30T17:06:27+0900",
>>>>>>> 78b8a80 (back/feat: Diary CRUD 추가)
=======
    date = "2022-10-03T21:39:14+0900",
>>>>>>> 126360e (back/feat: Diary Comments 구현)
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.jar, environment: Java 11.0.15 (Azul Systems, Inc.)"
=======
    date = "2022-10-04T21:18:51+0900",
=======
    date = "2022-10-05T19:00:41+0900",
>>>>>>> 45b8282 (back/feat: CORS 설정 추가)
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.jar, environment: Java 11.0.14.1 (Azul Systems, Inc.)"
>>>>>>> 5ce170e (back/feat: Jwt 방식의 Login 구현)
)
@Component
public class CalendarMapperImpl implements CalendarMapper {

    @Override
    public List<CalendarResponseDto> calendarsToCalendarResponseDtos(List<Calendar> calendars) {
        if ( calendars == null ) {
            return null;
        }

        List<CalendarResponseDto> list = new ArrayList<CalendarResponseDto>( calendars.size() );
        for ( Calendar calendar : calendars ) {
            list.add( calendarToCalendarResponseDto( calendar ) );
        }

        return list;
    }
}
