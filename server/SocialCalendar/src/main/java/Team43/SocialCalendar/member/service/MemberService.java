package Team43.SocialCalendar.member.service;

import Team43.SocialCalendar.exception.BusinessLogicException;
import Team43.SocialCalendar.exception.ExceptionCode;
import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.member.repository.MemberRepository;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());


        return memberRepository.save(member);
    }

    public Member updateMember(Member member) {

        Member findMember = findVerifiedMember(member.getMemberId());
        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getMemberImg())
                .ifPresent(memberImg -> findMember.setMemberImg(memberImg));
        Optional.ofNullable(member.getStatusMessage())
                .ifPresent(statusMsg -> findMember.setStatusMessage(statusMsg));

        return memberRepository.save(findMember);
    }

    public Member findMember(long memberId) {

        return findVerifiedMember(memberId);
    }

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }


    private void verifyExistsEmail(String email) {
        Member member = memberRepository.findByEmail(email);
        if (member != null) {
            throw new DuplicateKeyException("이미 사용중인 이메일입니다.");
        }
    }

    public long emailToMemberId(String email) {
        Member member = memberRepository.findByEmail(email);

        return member.getMemberId();
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        Member findMember =
                optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }
}
