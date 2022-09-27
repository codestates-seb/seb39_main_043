package Team43.SocialCalendar.schedule.mapper;

import Team43.SocialCalendar.schedule.dto.SchedulePatchDto;
import Team43.SocialCalendar.schedule.dto.SchedulePostDto;
import Team43.SocialCalendar.schedule.dto.ScheduleResponseDto;
import Team43.SocialCalendar.schedule.entity.Schedule;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ScheduleMapper {

    Schedule schedulePostDtoToSchedule(SchedulePostDto schedulePostDto);
    Schedule schedulePatchDtoToSchedule(SchedulePatchDto schedulePatchDto);
    ScheduleResponseDto scheduleToScheduleResponseDto(Schedule schedule);

}
