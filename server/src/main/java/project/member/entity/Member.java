package project.member.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "MEMBERS")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;

    @Column(length = 100)
    private String memberImg;

    @Column(length = 100)
    private String email;

    @Column(length = 50)
    private String name;

    @Column(length = 100)
    private String password;

    @Column(length = 50)
    private String statusMessage;

    public Member(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public void updateMemberInfo(String name, String memberImg, String statusMessage) {
        this.name = name;
        this.memberImg = memberImg;
        this.statusMessage = statusMessage;
    }
}