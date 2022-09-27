package Team43.SocialCalendar.member.controller;

import Team43.SocialCalendar.member.dto.MemberPatchDto;
import Team43.SocialCalendar.member.dto.MemberPostDto;
import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.member.mapper.MemberMapper;
import Team43.SocialCalendar.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/members")
@CrossOrigin(origins = "http://main-project-043.s3-website.ap-northeast-2.amazonaws.com/", allowCredentials = "true")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {

        log.info("postMember");
        Member response = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));

        return new ResponseEntity<>(
                mapper.memberToMemberResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity updateMember(@PathVariable("member-id") long memberId,
                                       @RequestBody MemberPatchDto memberPatchDto) {

        log.info("updateMember");
        memberPatchDto.setMemberId(memberId);
        Member response = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));

        return new ResponseEntity<>(
                mapper.memberToMemberResponseDto(response), HttpStatus.ACCEPTED);
    }

    @GetMapping("{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") long memberId) {

        log.info("getMember");
        Member response = memberService.findMember(memberId);
        return new ResponseEntity<>(
                mapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers() {

        log.info("getMembers");
        List<Member> response = memberService.findMembers();
        return new ResponseEntity<>(mapper.membersToMemberResponseDtos(response), HttpStatus.OK);
    }

    @DeleteMapping("{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") long memberId) {

        log.info("deleteMember");
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
