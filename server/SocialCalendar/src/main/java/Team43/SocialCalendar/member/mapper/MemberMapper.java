package Team43.SocialCalendar.member.mapper;

import Team43.SocialCalendar.member.dto.MemberPatchDto;
import Team43.SocialCalendar.member.dto.MemberPostDto;
import Team43.SocialCalendar.member.dto.MemberResponseDto;
import Team43.SocialCalendar.member.entity.Member;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

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
            Long memberId = member.getMemberId();
            String name = member.getName();
            String email = member.getEmail();
            String password = member.getPassword();
            String memberImg = member.getMemberImg();

            MemberResponseDto memberResponseDto = new MemberResponseDto(memberId, email, name, password, memberImg);
            return memberResponseDto;
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
}
