package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.CalendarAttendeeResponseDto;
import Team43.SocialCalendar.calendar.dto.CalendarPatchDto;
import Team43.SocialCalendar.calendar.dto.CalendarPostDto;
import Team43.SocialCalendar.calendar.dto.CalendarResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.entity.CalendarAttendee;
import Team43.SocialCalendar.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CalendarMapper {

    List<CalendarResponseDto> calendarsToCalendarResponseDtos(List<Calendar> calendars);

//    @Mapping(target = "member", ignore = true)
//    @Mapping(target = "memberId", ignore = true)
//    @Mapping(target = "createdAt", ignore = true)
//    @Mapping(target = "modifiedAt", ignore = true)
    default Calendar calendarPatchDtoToCalendar(CalendarPatchDto calendarPatchDto) {
        if (calendarPatchDto == null) {
            return null;
        } else {
            Calendar calendar = new Calendar();
            calendar.setCalendarId(calendarPatchDto.getCalendarId());
            calendar.setTitle(calendarPatchDto.getTitle());
            calendar.setCalendarImg(calendarPatchDto.getCalendarImg());

            return calendar;
        }
    }

    default Calendar calendarPostDtoToCalendar(CalendarPostDto calendarPostDto) {
        Calendar calendar = new Calendar();
        Member member = new Member();
        member.setMemberId(calendarPostDto.getMemberId());

        calendar.setMember(member);
        calendar.setTitle(calendarPostDto.getTitle());

        return calendar;
    }

    default CalendarResponseDto calendarToCalendarResponseDto(Calendar calendar) {
        List<CalendarAttendee> calendarAttendees = calendar.getCalendarAttendees();

        CalendarResponseDto calendarResponseDto = new CalendarResponseDto();

        calendarResponseDto.setCalendarId(calendar.getCalendarId());
        calendarResponseDto.setTitle(calendar.getTitle());
        calendarResponseDto.setCalendarImg(calendar.getCalendarImg());

        calendarResponseDto.setMember(calendar.getMemberId());
        calendarResponseDto.setEmail(calendar.getMemberId().getEmail());
        calendarResponseDto.setName(calendar.getMemberId().getName());
        calendarResponseDto.setMemberImg(calendar.getMemberId().getMemberImg());
        calendarResponseDto.setStatusMessage(calendar.getMemberId().getStatusMessage());

        calendarResponseDto.setCalendarAttendees(calendarAttendeesToCalendarAttendeeResponseDtos(calendarAttendees));

        calendarResponseDto.setCreatedAt(calendar.getCreatedAt());

        return calendarResponseDto;
    }

    default List<CalendarAttendeeResponseDto> calendarAttendeesToCalendarAttendeeResponseDtos(
                                                                List<CalendarAttendee> calendarAttendees) {
        return calendarAttendees
                .stream()
                .map(calendarAttendee -> CalendarAttendeeResponseDto
                        .builder()
                        .calendarAttendeeId(calendarAttendee.getCalendarAttendeeId())
                        .memberId(calendarAttendee.getMemberId().getMemberId())
                        .email(calendarAttendee.getMemberId().getEmail())
                        .name(calendarAttendee.getMemberId().getName())
                        .memberImg(calendarAttendee.getMemberId().getMemberImg())
                        .statusMessage(calendarAttendee.getMemberId().getStatusMessage())
                        .build())
                .collect(Collectors.toList());
    }

}
