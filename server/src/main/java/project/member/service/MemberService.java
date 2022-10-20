package project.member.service;

import lombok.AllArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import project.member.entity.Member;
import project.member.repository.MemberRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Member createMember(Member member) {
        verifyExistEmail(member.getEmail());
        return memberRepository.save(member);
    }

    public Member updateMember(Member member) {

        Member verifiedMember = findVerifiedMember(member.getId());
        Optional.ofNullable(member.getName())
                .ifPresent(name -> verifiedMember.updateMemberInfo(name, member.getMemberImg(), member.getStatusMessage()));
        Optional.ofNullable(member.getMemberImg())
                .ifPresent(memberImg -> verifiedMember.updateMemberInfo(member.getName(), memberImg, member.getStatusMessage()));
        Optional.ofNullable(member.getStatusMessage())
                .ifPresent(statusMsg -> verifiedMember.updateMemberInfo(member.getName(), member.getMemberImg(), statusMsg));
        return memberRepository.save(verifiedMember);
    }

    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public void deleteMember(long memberId) {
        Member verifiedMember = findVerifiedMember(memberId);
        memberRepository.delete(verifiedMember);
    }

    private void verifyExistEmail(String email) {
        Member member = memberRepository.findByEmail(email);
        if (member != null) {
            throw new DuplicateKeyException("THIS EMAIL IS ALREADY IN USE");
        }
    }

    private Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() -> new IllegalArgumentException("NOT FOUND MEMBER"));
        return findMember;
    }
}