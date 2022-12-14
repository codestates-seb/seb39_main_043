package Team43.SocialCalendar.schedule.mapper;

import Team43.SocialCalendar.schedule.dto.SchedulePatchDto;
import Team43.SocialCalendar.schedule.dto.SchedulePostDto;
import Team43.SocialCalendar.schedule.dto.ScheduleResponseDto;
import Team43.SocialCalendar.schedule.entity.Schedule;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-27T15:29:10+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
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
}
