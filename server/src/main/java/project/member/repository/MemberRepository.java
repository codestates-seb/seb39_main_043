package project.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByEmail(String email);
}
