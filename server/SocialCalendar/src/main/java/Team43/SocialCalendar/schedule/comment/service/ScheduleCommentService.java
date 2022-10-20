package Team43.SocialCalendar.schedule.comment.service;

import Team43.SocialCalendar.schedule.comment.entity.ScheduleComment;
import Team43.SocialCalendar.schedule.comment.repository.ScheduleCommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduleCommentService {

    private ScheduleCommentRepository scheduleCommentRepository;

    public ScheduleCommentService(ScheduleCommentRepository scheduleCommentRepository) {
        this.scheduleCommentRepository = scheduleCommentRepository;
    }

    public ScheduleComment createScheduleComment(ScheduleComment scheduleComment) {
        return scheduleCommentRepository.save(scheduleComment);
    }

    public List<ScheduleComment> findScheduleCommentsByScheduleId(Long scheduleId) {
        return scheduleCommentRepository.findScheduleCommentBySchedule_ScheduleId(scheduleId);
    }
}
