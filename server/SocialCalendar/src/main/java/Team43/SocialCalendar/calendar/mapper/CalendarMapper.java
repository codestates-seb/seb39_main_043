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

    @Mapping(target = "member", ignore = true)
    @Mapping(target = "memberId", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "modifiedAt", ignore = true)
    default Calendar calendarPatchDtoToCalendar(CalendarPatchDto calendarPatchDto) {
        if (calendarPatchDto == null) {
            return null;
        } else {
            Calendar calendar = new Calendar();
            calendar.setCalendarId(calendarPatchDto.getCalendarId());
            calendar.setTitle(calendarPatchDto.getTitle());
            calendar.setCalendarImg(calendarPatchDto.getCalendarImg());

//            List<CalendarAttendee> calendarAttendees = calendarPatchDto.getCalendarAttendees().stream()
//                    .map(calendarAttendeeDto -> {
//                        CalendarAttendee calendarAttendee = new CalendarAttendee();
//                        Member member = new Member();
//                        member.setMemberId(calendarAttendeeDto.getMemberId());
//                        calendarAttendee.addCalendar(calendar);
//                        calendarAttendee.addMember(member);
//                        return calendarAttendee;
//                    }).collect(Collectors.toList());
//            calendar.setCalendarAttendees(calendarAttendees);

            return calendar;
        }
    }

    default Calendar calendarPostDtoToCalendar(CalendarPostDto calendarPostDto) {
        Calendar calendar = new Calendar();
        Member member = new Member();
        member.setMemberId(calendarPostDto.getMemberId());

//        List<CalendarAttendee> calendarAttendees = calendarPostDto.getCalendarAttendees().stream()
//                .map(calendarAttendeeDto -> {
//                    CalendarAttendee calendarAttendee = new CalendarAttendee();
//                    Member member1 = new Member();
//                    member1.setMemberId(calendarAttendeeDto.getMemberId());
//                    calendarAttendee.addCalendar(calendar);
//                    calendarAttendee.addMember(member1);
//                    return calendarAttendee;
//                }).collect(Collectors.toList());
//        calendar.setCalendarAttendees(calendarAttendees);

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
//                        .calendarId(calendarAttendee.getCalendarId().getCalendarId())
//                        .title(calendarAttendee.getCalendarId().getTitle())
                        .calendarAttendeeId(calendarAttendee.getCalendarAttendeeId())
                        .memberId(calendarAttendee.getMemberId().getMemberId())
                        .email(calendarAttendee.getMemberId().getEmail())
                        .name(calendarAttendee.getMemberId().getName())
                        .memberImg(calendarAttendee.getMemberId().getMemberImg())
                        .build())
                .collect(Collectors.toList());
    }
}
