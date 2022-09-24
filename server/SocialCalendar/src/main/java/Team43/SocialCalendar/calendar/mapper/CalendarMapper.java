package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.CalendarPatchDto;
import Team43.SocialCalendar.calendar.dto.CalendarPostDto;
import Team43.SocialCalendar.calendar.dto.CalendarResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface CalendarMapper {
    @Mapping(target = "member", ignore = true)
    @Mapping(target = "memberId", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "modifiedAt", ignore = true)
    Calendar calendarPatchDtoToCalendar(CalendarPatchDto calendarPatchDto);

    default Calendar calendarPostDtoToCalendar(CalendarPostDto calendarPostDto) {
        Calendar calendar = new Calendar();
        Member member = new Member();
        member.setMemberId(calendarPostDto.getMemberId());
        calendar.setMember(member);
        calendar.setTitle(calendarPostDto.getTitle());

        return calendar;
    }

    default CalendarResponseDto calendarToCalendarResponseDto(Calendar calendar) {
        CalendarResponseDto calendarResponseDto = new CalendarResponseDto();
        calendarResponseDto.setCalendarId(calendar.getCalendarId());
        calendarResponseDto.setMember(calendar.getMemberId());
        calendarResponseDto.setTitle(calendar.getTitle());
        calendarResponseDto.setCalendarImg(calendar.getCalendarImg());
        calendarResponseDto.setCreatedAt(calendar.getCreatedAt());

        return calendarResponseDto;
    }
}
