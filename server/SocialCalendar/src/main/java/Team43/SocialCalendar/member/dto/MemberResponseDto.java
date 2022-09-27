package Team43.SocialCalendar.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberResponseDto {

    private long memberId;
    private String email;
    private String name;
    private String password;
    private String memberImg;
}
