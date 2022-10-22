package Team43.SocialCalendar.schedule.mapper;

<<<<<<< HEAD
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
<<<<<<< HEAD
    date = "2022-10-06T17:10:49+0900",
=======
    date = "2022-09-30T17:06:27+0900",
>>>>>>> 78b8a80 (back/feat: Diary CRUD 추가)
=======
    date = "2022-10-03T21:39:14+0900",
>>>>>>> 126360e (back/feat: Diary Comments 구현)
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.jar, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
public class ScheduleMapperImpl extends ScheduleMapper {
=======
import Team43.SocialCalendar.schedule.dto.SchedulePatchDto;
import Team43.SocialCalendar.schedule.dto.SchedulePostDto;
import Team43.SocialCalendar.schedule.dto.ScheduleResponseDto;
import Team43.SocialCalendar.schedule.entity.Schedule;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-27T18:37:08+0900",
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.jar, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class ScheduleMapperImpl implements ScheduleMapper {

    @Override
    public Schedule schedulePostDtoToSchedule(SchedulePostDto schedulePostDto) {
        if ( schedulePostDto == null ) {
            return null;
        }

        Schedule schedule = new Schedule();

        schedule.setTitle( schedulePostDto.getTitle() );
        schedule.setAttendees( schedulePostDto.getAttendees() );
        schedule.setScheduleAt( schedulePostDto.getScheduleAt() );
        schedule.setLocation( schedulePostDto.getLocation() );
        schedule.setContents( schedulePostDto.getContents() );

        return schedule;
    }

    @Override
    public Schedule schedulePatchDtoToSchedule(SchedulePatchDto schedulePatchDto) {
        if ( schedulePatchDto == null ) {
            return null;
        }

        Schedule schedule = new Schedule();

        schedule.setScheduleId( schedulePatchDto.getScheduleId() );
        schedule.setTitle( schedulePatchDto.getTitle() );
        schedule.setAttendees( schedulePatchDto.getAttendees() );
        schedule.setScheduleAt( schedulePatchDto.getScheduleAt() );
        schedule.setLocation( schedulePatchDto.getLocation() );
        schedule.setContents( schedulePatchDto.getContents() );

        return schedule;
    }

    @Override
    public ScheduleResponseDto scheduleToScheduleResponseDto(Schedule schedule) {
        if ( schedule == null ) {
            return null;
        }

        Long scheduleId = null;
        String title = null;
        String scheduleAt = null;
        String attendees = null;
        String location = null;
        String contents = null;

        scheduleId = schedule.getScheduleId();
        title = schedule.getTitle();
        scheduleAt = schedule.getScheduleAt();
        attendees = schedule.getAttendees();
        location = schedule.getLocation();
        contents = schedule.getContents();

        ScheduleResponseDto scheduleResponseDto = new ScheduleResponseDto( scheduleId, title, scheduleAt, attendees, location, contents );

        return scheduleResponseDto;
    }
>>>>>>> 1c376a6 (back/refactor: merge 후 build)
}
