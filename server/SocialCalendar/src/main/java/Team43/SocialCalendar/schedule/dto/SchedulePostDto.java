package Team43.SocialCalendar.schedule.dto;

import lombok.Getter;

import javax.validation.constraints.Pattern;

@Getter
public class SchedulePostDto {

    private String title;
    @Pattern(regexp = "^\\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01]) [0-9]{2}:[0-9]{2} ~ \\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01]) [0-9]{2}:[0-9]{2}$",
            message = "yyyy.mm.dd hh:mm ~ yyyy.mm.dd hh:mm 의 형식을 지켜야 합니다.")
    private String scheduleAt;
    private String attendees;
    private String location;
    private String contents;
}
