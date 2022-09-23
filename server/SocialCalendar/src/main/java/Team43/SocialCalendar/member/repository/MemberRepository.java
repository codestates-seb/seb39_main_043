package Team43.SocialCalendar.member.repository;

import Team43.SocialCalendar.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
