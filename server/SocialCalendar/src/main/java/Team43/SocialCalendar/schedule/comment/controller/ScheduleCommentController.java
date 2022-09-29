package Team43.SocialCalendar.schedule.comment.controller;

import Team43.SocialCalendar.schedule.comment.dto.ScheduleCommentPostDto;
import Team43.SocialCalendar.schedule.comment.mapper.ScheduleCommentMapper;
import Team43.SocialCalendar.schedule.comment.service.ScheduleCommentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/schedulecomments")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ScheduleCommentController {

    private final ScheduleCommentService scheduleCommentService;
    private final ScheduleCommentMapper mapper;

    public ScheduleCommentController(ScheduleCommentService scheduleCommentService, ScheduleCommentMapper mapper) {
        this.scheduleCommentService = scheduleCommentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postScheduleComment(@RequestBody ScheduleCommentPostDto scheduleCommentPostDto) {

        log.info("postScheduleComment");
        return null;
    }

    @GetMapping("{schedule-id}")
    public ResponseEntity getScheduleComments(@PathVariable("schedule-id") Long scheduleId) {

        log.info("getScheduleComments");
        return null;
    }
}
