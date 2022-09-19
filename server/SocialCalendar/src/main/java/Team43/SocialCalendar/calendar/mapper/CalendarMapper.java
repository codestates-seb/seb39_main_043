package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.CalendarPostDto;
import Team43.SocialCalendar.calendar.dto.CalendarResponseDto;
import Team43.SocialCalendar.calendar.dto.UserCalendarMemberResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.entity.UserCalendarMember;
import Team43.SocialCalendar.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CalendarMapper {

    List<CalendarResponseDto> calendarsToCalendarResponseDtos(List<Calendar> calendars);

    default Calendar calendarPostDtoToCalendar(CalendarPostDto calendarPostDto) {
        Calendar calendar = new Calendar();
        User calendarMaster = new User();
        calendarMaster.setUserId(calendarPostDto.getCalendarMasterId());

        List<UserCalendarMember> calendarMembers = calendarPostDto.getCalendarMembers().stream()
                .map(userCalendarMemberDto -> {
                    UserCalendarMember calendarMember = new UserCalendarMember();
                    Calendar calendar1 = new Calendar();
                    User member = new User();
                    calendar1.setCalendarId(userCalendarMemberDto.getCalendarId());
                    member.setUserId(userCalendarMemberDto.getMemberId());
                    calendarMember.setCalendarIdfk(calendar1);
                    calendarMember.addMember(member);
                    return calendarMember;
                }).collect(Collectors.toList());
        calendar.setMaster(calendarMaster);
        calendar.setUserCalendarMembers(calendarMembers);

        return calendar;
    }

    default CalendarResponseDto calendarToCalendarResponseDto(Calendar calendar) {
        List<UserCalendarMember> calendarMembers = calendar.getUserCalendarMembers();

        CalendarResponseDto calendarResponseDto = new CalendarResponseDto();
        calendarResponseDto.setCalendarId(calendar.getCalendarId());
        calendarResponseDto.setCalendarMaster(calendar.getCalendarMasterIdfk());
        calendarResponseDto.setTitle(calendar.getTitle());
        calendarResponseDto.setCalendarImg(calendar.getCalendarImg());
        calendarResponseDto.setCalendarMembers(userCalendarMemberToUserCalendarMemberResponseDtos(calendarMembers));
        calendarResponseDto.setCreatedAt(calendar.getCreatedAt());

        return calendarResponseDto;
    }

    default List<UserCalendarMemberResponseDto> userCalendarMemberToUserCalendarMemberResponseDtos(
            List<UserCalendarMember> calendarMembers) {
        return calendarMembers.stream()
                .map(calendarMember -> UserCalendarMemberResponseDto
                        .builder()
//                        .calendarId(calendarMember.getCalendarIdfk().getCalendarId())
                        .memberId(calendarMember.getMemberIdfk().getUserId())
                        .memberName(calendarMember.getMemberIdfk().getName())
                        .memberEmail(calendarMember.getMemberIdfk().getEmail())
                        .build())
                .collect(Collectors.toList());
    }
}
