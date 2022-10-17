package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.AddCalendarAttendeeDto;
import Team43.SocialCalendar.calendar.dto.AddCalendarAttendeeResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.entity.CalendarAttendee;
import Team43.SocialCalendar.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CalendarAttendeeMapper {

    default CalendarAttendee addCalendarAttendeeDtoToCalendarAttendee(AddCalendarAttendeeDto addCalendarAttendeeDto) {
        Calendar calendar = new Calendar();
        Member member = new Member();
        CalendarAttendee calendarAttendee = new CalendarAttendee();
        calendar.setCalendarId(addCalendarAttendeeDto.getCalendarId());
        member.setMemberId(addCalendarAttendeeDto.getMemberId());
        calendarAttendee.addCalendar(calendar);
        calendarAttendee.addMember(member);

        return calendarAttendee;
    }

    default AddCalendarAttendeeResponseDto calendarAttendeeToAddCalendarAttendeeResponseDto(
                                                                        CalendarAttendee calendarAttendee) {
        AddCalendarAttendeeResponseDto addCalendarAttendeeResponseDto = new AddCalendarAttendeeResponseDto();
        addCalendarAttendeeResponseDto.setCalendarAttendeeId(calendarAttendee.getCalendarAttendeeId());
        addCalendarAttendeeResponseDto.setCalendar(calendarAttendee.getCalendarId());
        addCalendarAttendeeResponseDto.setTitle(calendarAttendee.getCalendarId().getTitle());
        addCalendarAttendeeResponseDto.setMember(calendarAttendee.getMemberId());
        addCalendarAttendeeResponseDto.setEmail(calendarAttendee.getMemberId().getEmail());
        addCalendarAttendeeResponseDto.setName(calendarAttendee.getMemberId().getName());

        return addCalendarAttendeeResponseDto;
    }
}
