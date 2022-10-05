package Team43.SocialCalendar.diary.comment.mapper;

import Team43.SocialCalendar.diary.comment.dto.DiaryCommentPostDto;
import Team43.SocialCalendar.diary.comment.dto.DiaryCommentResponseDto;
import Team43.SocialCalendar.diary.comment.entity.DiaryComment;
import Team43.SocialCalendar.diary.entity.Diary;
import Team43.SocialCalendar.member.entity.Member;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Mapper
public class DiaryCommentMapper {

    public DiaryComment diaryCommentPostDtoToDiaryComment(DiaryCommentPostDto diaryCommentPostDto) {

        DiaryComment diaryComment = new DiaryComment();
        Diary diary = new Diary();
        Member member = new Member();

        diary.setDiaryId(diaryCommentPostDto.getDiaryId());
        member.setMemberId(diaryCommentPostDto.getMemberId());

        diaryComment.setContents(diaryCommentPostDto.getContents());
        diaryComment.setMember(member);
        diaryComment.setDiary(diary);

        return diaryComment;
    }

    public DiaryCommentResponseDto diaryCommentToDiaryCommentResponseDto(DiaryComment diaryComment) {

        if (diaryComment == null) {
            return null;
        } else {
            Long diaryId = diaryComment.getDiary().getDiaryId();
            Long memberId = diaryComment.getMember().getMemberId();
            String name = diaryComment.getMember().getName();
            String memberImg = diaryComment.getMember().getMemberImg();

            String contents = diaryComment.getContents();
            Long diaryCommentId = diaryComment.getDiaryCommentId();

            DiaryCommentResponseDto diaryCommentResponseDto =
                    new DiaryCommentResponseDto(diaryCommentId, diaryId, memberId, name, memberImg, contents);

            return diaryCommentResponseDto;
        }
    }

    public List<DiaryCommentResponseDto> diaryCommentsToDiaryCommentResponseDtos(List<DiaryComment> diaryComments) {

        if (diaryComments == null) {
            return null;
        } else {
            List<DiaryCommentResponseDto> list = new ArrayList<>(diaryComments.size());
            for (DiaryComment diaryComment : diaryComments) {
                list.add(diaryCommentToDiaryCommentResponseDto(diaryComment));
            }
            return list;
        }
    }
}
