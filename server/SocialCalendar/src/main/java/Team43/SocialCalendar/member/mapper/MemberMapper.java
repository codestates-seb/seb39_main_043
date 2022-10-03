package Team43.SocialCalendar.member.mapper;

import Team43.SocialCalendar.calendar.entity.Calendar;
import Team43.SocialCalendar.calendar.entity.CalendarAttendee;
import Team43.SocialCalendar.member.dto.*;
import Team43.SocialCalendar.member.entity.Member;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper
@Component
public class MemberMapper {

    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if (memberPostDto == null) {
            return null;
        } else {
            Member member = new Member();
            member.setName(memberPostDto.getName());
            member.setEmail(memberPostDto.getEmail());
            member.setPassword(memberPostDto.getPassword());
            return member;
        }
    }

    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if (memberPatchDto == null) {
            return null;
        } else {
            Member member = new Member();

            member.setMemberId(memberPatchDto.getMemberId());
            member.setName(memberPatchDto.getName());
            member.setMemberImg(memberPatchDto.getMemberImg());
            member.setStatusMessage(memberPatchDto.getStatusMessage());

            return member;
        }
    }
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if (member == null) {
            return null;
        } else {
            List<Calendar> adminCalendars = member.getAdminCalendars();
            List<CalendarAttendee> attendedCalendars = member.getAttendedCalendars();

            MemberResponseDto memberResponseDto = new MemberResponseDto();

            memberResponseDto.setMemberId(member.getMemberId());
            memberResponseDto.setEmail(member.getEmail());
            memberResponseDto.setName(member.getName());
            memberResponseDto.setMemberImg(member.getMemberImg());

            memberResponseDto.setAdminCalendars(adminCalendarsToAdminCalendarResponseDtos(adminCalendars));
            memberResponseDto.setAttendedCalendars(attendedCalendarsToAttendedCalendarResponseDtos(attendedCalendars));

            memberResponseDto.setCreatedAt(member.getCreatedAt());

            return memberResponseDto;

//            Long memberId = member.getMemberId();
//            String name = member.getName();
//            String email = member.getEmail();
//            String password = member.getPassword();
//            String memberImg = member.getMemberImg();
//
//            List<Calendar> adminCalendars = member.getAdminCalendars();
//            LocalDateTime createdAt = member.getCreatedAt();
//
//            MemberResponseDto memberResponseDto = new MemberResponseDto(memberId, email, name, password, memberImg, adminCalendars, createdAt);
//            return memberResponseDto;
        }
    }

    public List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members) {
        if (members == null) {
            return null;
        } else {
            List<MemberResponseDto> list = new ArrayList<>(members.size());
            for (Member member : members) {
                list.add(memberToMemberResponseDto(member));
            }
            return list;
        }
    }

    public List<AdminCalendarResponseDto> adminCalendarsToAdminCalendarResponseDtos(List<Calendar> calendars) {
        return calendars
                .stream()
                .map(calendar -> AdminCalendarResponseDto
                        .builder()
                        .calendarId(calendar.getCalendarId())
                        .title(calendar.getTitle())
                        .calendarImg(calendar.getCalendarImg())
                        .build())
                .collect(Collectors.toList());
    }

    public List<AttendedCalendarResponseDto> attendedCalendarsToAttendedCalendarResponseDtos(
                                                                        List<CalendarAttendee> calendarAttendees) {
        return calendarAttendees
                .stream()
                .map(calendarAttendee -> AttendedCalendarResponseDto
                        .builder()
                        .calendarId(calendarAttendee.getCalendarId().getCalendarId())
                        .title(calendarAttendee.getCalendarId().getTitle())
                        .calendarImg(calendarAttendee.getCalendarId().getCalendarImg())
                        .build())
                .collect(Collectors.toList());
    }
}
