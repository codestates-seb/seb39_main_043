package project.member.entity;

import lombok.*;
import project.common.BaseEntity;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "MEMBERS")
public class Member extends BaseEntity {

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
}