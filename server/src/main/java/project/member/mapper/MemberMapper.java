package project.member.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;
import project.member.dto.MemberPatchDto;
import project.member.dto.MemberPostDto;
import project.member.dto.MemberResponseDto;
import project.member.entity.Member;

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
            member.setId(memberPatchDto.getMemberId());
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
            MemberResponseDto memberResponseDto = new MemberResponseDto();
            memberResponseDto.setMemberId(member.getId());
            memberResponseDto.setEmail(member.getEmail());
            memberResponseDto.setName(member.getName());
            memberResponseDto.setMemberImg(member.getMemberImg());
            memberResponseDto.setStatusMessage(member.getStatusMessage());
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