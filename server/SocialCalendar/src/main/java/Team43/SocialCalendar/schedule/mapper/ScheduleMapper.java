package Team43.SocialCalendar.schedule.mapper;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.schedule.dto.SchedulePatchDto;
import Team43.SocialCalendar.schedule.dto.SchedulePostDto;
import Team43.SocialCalendar.schedule.dto.ScheduleResponseDto;
import Team43.SocialCalendar.schedule.dto.ScheduleResponseDtos;
import Team43.SocialCalendar.schedule.entity.Schedule;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Mapper
@Component
public class ScheduleMapper {

    public Schedule schedulePostDtoToSchedule(SchedulePostDto schedulePostDto) {
        Schedule schedule = new Schedule();
        Member member = new Member();
        Calendar calendar = new Calendar();

        member.setMemberId(schedulePostDto.getMemberId());
        calendar.setCalendarId(schedulePostDto.getCalendarId());
        schedule.setTitle(schedulePostDto.getTitle());
        schedule.setScheduleAt(schedulePostDto.getScheduleAt());
        schedule.setAttendees(schedulePostDto.getAttendees());
        schedule.setLocation(schedulePostDto.getLocation());
        schedule.setContents(schedulePostDto.getContents());

        schedule.setMember(member);
        schedule.setCalendar(calendar);
        return schedule;
    }

    public Schedule schedulePatchDtoToSchedule(SchedulePatchDto schedulePatchDto) {
        if (schedulePatchDto == null) {
            return null;
        } else {
            Schedule schedule = new Schedule();
            schedule.setScheduleId(schedulePatchDto.getScheduleId());
            schedule.setTitle(schedulePatchDto.getTitle());
            schedule.setScheduleAt(schedulePatchDto.getScheduleAt());
            schedule.setAttendees(schedulePatchDto.getAttendees());
            schedule.setLocation(schedulePatchDto.getLocation());
            schedule.setContents(schedulePatchDto.getContents());
            return schedule;
        }
    }
    public ScheduleResponseDto scheduleToScheduleResponseDto(Schedule schedule) {

        if (schedule == null) {
            return null;
        } else {
            Long memberId = schedule.getMember().getMemberId();
            Long calendarId = schedule.getCalendar().getCalendarId();
            Long scheduleId = schedule.getScheduleId();
            String title = schedule.getTitle();
            String scheduleAt = schedule.getScheduleAt();
            String attendees = schedule.getAttendees();
            String location = schedule.getLocation();
            String contents = schedule.getContents();

            ScheduleResponseDto scheduleResponseDto
                    = new ScheduleResponseDto(memberId, calendarId, scheduleId, title, scheduleAt, attendees, location, contents);
            return scheduleResponseDto;
        }
    }

    // memberId, calendarId, scheduleId, title만 받아오기 위한 매퍼
    public ScheduleResponseDtos scheduleToScheduleResponseDto2(Schedule schedule) {

        if (schedule == null) {
            return null;
        } else {
            Long memberId = schedule.getMember().getMemberId();
            Long calendarId = schedule.getCalendar().getCalendarId();
            Long scheduleId = schedule.getScheduleId();
            String title = schedule.getTitle();

            ScheduleResponseDtos scheduleResponseDtos
                    = new ScheduleResponseDtos(memberId, calendarId, scheduleId, title);
            return scheduleResponseDtos;
        }
    }

    // 위에 매퍼를 이용해서 리스트화
    public List<ScheduleResponseDtos> scheduleToScheduleResponseDtos(List<Schedule> schedules) {

        if (schedules == null) {
            return null;
        } else {

            List<ScheduleResponseDtos> list = new ArrayList<>(schedules.size());
            for (Schedule schedule : schedules) {
                list.add(scheduleToScheduleResponseDto2(schedule));
            }
            return list;
        }
    }
}
