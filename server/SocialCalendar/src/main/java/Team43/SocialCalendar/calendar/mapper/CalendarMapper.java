package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.CalendarPostDto;
import Team43.SocialCalendar.calendar.dto.CalendarResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CalendarMapper {

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
