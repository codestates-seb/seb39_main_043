package project.member.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DuplicateKeyException;
import project.member.entity.Member;
import project.member.repository.MemberRepository;

import javax.transaction.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@Transactional
@SpringBootTest
class MemberServiceTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;

    @Test
    void 회원생성() {

        //given
        Member member = new Member("email@email.com", "name", "password");

        //when
        Member member1 = memberService.createMember(member);

        //then
        Member findMember = memberRepository.findByEmail("email@email.com");
        assertThat(member1).isEqualTo(findMember);
    }

    @Test
    void 중복회원예외() {

        //given
        Member member1 = new Member("email@email.com", "JIN", "password");
        Member member2 = new Member("email@email.com", "Ahn", "password");

        //when
        memberRepository.save(member1);

        //then
        try {
            memberRepository.save(member2);
        } catch (DuplicateKeyException e) {
            e.printStackTrace();
        }
    }

    @Test
    void 해당회원이존재하는가() {

        //given
        Member member = new Member("email@email.com", "JIN", "password");

        //when
        memberRepository.save(member);

        //then
        try {
            memberService.findMember(2L);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    @Test
    void 회원한명조회() {

        //given
        Member member = new Member("email@email.com", "JIN", "password");
        memberService.createMember(member);

        //when
        Member findMember = memberService.findMember(member.getId());

        //then
        assertThat(member).isEqualTo(findMember);
    }

    @Test
    void 모든회원조회() {

        //given
        Member member1 = new Member("email1@email.com", "JIN", "password");
        Member member2 = new Member("email2@email.com", "JIN", "password");
        Member member3 = new Member("email3@email.com", "JIN", "password");
        memberService.createMember(member1);
        memberService.createMember(member2);
        memberService.createMember(member3);

        //when
        List<Member> members = memberService.findMembers();

        //then
        assertThat(members.size()).isEqualTo(3);
    }

    @Test
    void 회원삭제() {

        //given
        Member member = new Member("email1@email.com", "JIN", "password");
        memberService.createMember(member);

        //when
        memberService.deleteMember(1L);

        //then
        assertThat(memberService.findMembers().size()).isEqualTo(0);
    }
}