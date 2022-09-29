package Team43.SocialCalendar.schedule.comment.mapper;

import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.schedule.comment.dto.ScheduleCommentPostDto;
import Team43.SocialCalendar.schedule.comment.dto.ScheduleCommentResponseDto;
import Team43.SocialCalendar.schedule.comment.entity.ScheduleComment;
import Team43.SocialCalendar.schedule.entity.Schedule;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Mapper
public class ScheduleCommentMapper {

    public ScheduleComment scheduleCommentPostDtoToScheduleComment(ScheduleCommentPostDto scheduleCommentPostDto) {

        ScheduleComment scheduleComment = new ScheduleComment();
        Schedule schedule = new Schedule();
        Member member = new Member();

        member.setMemberId(scheduleCommentPostDto.getMemberId());
        schedule.setScheduleId(scheduleCommentPostDto.getScheduleId());

        scheduleComment.setContents(scheduleCommentPostDto.getContents());
        scheduleComment.setMember(member);
        scheduleComment.setSchedule(schedule);
        return scheduleComment;
    }

    public ScheduleCommentResponseDto scheduleCommentToScheduleCommentResponseDto(ScheduleComment scheduleComment) {

        if (scheduleComment == null) {
            return null;
        } else {
            Long memberId = scheduleComment.getMember().getMemberId();
            Long scheduleId = scheduleComment.getSchedule().getScheduleId();
            String name = scheduleComment.getMember().getName();
            String memberImg = scheduleComment.getMember().getMemberImg();

            String contents = scheduleComment.getContents();
            Long scheduleCommentId = scheduleComment.getScheduleCommentId();

            ScheduleCommentResponseDto scheduleCommentResponseDto
                    = new ScheduleCommentResponseDto(scheduleCommentId, scheduleId, memberId, name, memberImg, contents);
            return scheduleCommentResponseDto;
        }
    }

    public List<ScheduleCommentResponseDto> scheduleCommentsToScheduleCommentResponseDto(List<ScheduleComment> scheduleComments) {

        if (scheduleComments == null) {
            return null;
        } else {
            List<ScheduleCommentResponseDto> list = new ArrayList<>(scheduleComments.size());
            for (ScheduleComment scheduleComment : scheduleComments) {
                list.add(scheduleCommentToScheduleCommentResponseDto(scheduleComment));
            }
            return list;
        }
    }
}
