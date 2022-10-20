package project.member.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import project.member.entity.Member;
import project.member.repository.MemberRepository;
import project.member.service.MemberService;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
class MemberControllerTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;

    @Test
    void JPA_Auditing_TEST() {

        //given
        LocalDateTime now = LocalDateTime.of(2020,11,8,0,0);
        Member member = new Member();

        //when
        memberService.createMember(member);

        //then
        assertThat(member.getCreatedAt()).isAfter(now);
        assertThat(member.getModifiedAt()).isAfter(now);

        memberRepository.deleteAll();
    }
}