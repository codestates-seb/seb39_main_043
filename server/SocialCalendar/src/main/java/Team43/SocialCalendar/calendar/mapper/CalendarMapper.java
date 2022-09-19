package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.CalendarPostDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.entity.UserCalendarMember;
import Team43.SocialCalendar.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CalendarMapper {

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
}
