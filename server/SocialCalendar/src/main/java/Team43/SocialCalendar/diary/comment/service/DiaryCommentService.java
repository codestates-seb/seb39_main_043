package Team43.SocialCalendar.diary.comment.service;

import Team43.SocialCalendar.diary.comment.entity.DiaryComment;
import Team43.SocialCalendar.diary.comment.repository.DiaryCommentRepository;
import Team43.SocialCalendar.diary.service.DiaryService;
import Team43.SocialCalendar.exception.BusinessLogicException;
import Team43.SocialCalendar.exception.ExceptionCode;
import Team43.SocialCalendar.member.service.MemberService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DiaryCommentService {

    private final DiaryCommentRepository diaryCommentRepository;

    private final MemberService memberService;

    private final DiaryService diaryService;

    public DiaryCommentService(DiaryCommentRepository diaryCommentRepository,
                               MemberService memberService,
                               DiaryService diaryService) {
        this.diaryCommentRepository = diaryCommentRepository;
        this.memberService = memberService;
        this.diaryService = diaryService;
    }

    public DiaryComment createDiaryComment(DiaryComment diaryComment) {
        verifyCommentDiary(diaryComment);
        verifyCommentMember(diaryComment);
        DiaryComment savedDiaryComment = saveDiaryComment(diaryComment);

        return savedDiaryComment;
    }

    public List<DiaryComment> findDiaryCommentsByDiaryId(Long diaryId) {
        return diaryCommentRepository.findDiaryCommentByDiary_DiaryId(diaryId);
    }


    // 존재하는 다이어리인지 검증하는 메서드를 다이어리 커멘트 서비스에서도 쓰기 위한 메서드
    private void verifyCommentDiary(DiaryComment diaryComment) {
        diaryService.findVerifiedDiary(diaryComment.getDiary().getDiaryId());
    }

    // 존재하는 회원인지 검증하는 메서드를 다이어리 커멘트 서비스에서도 쓰기 위한 메서드
    private void verifyCommentMember(DiaryComment diaryComment) {
        memberService.findVerifiedMember(diaryComment.getMember().getMemberId());
    }

    // 존재하는 다이어리 댓글인지 확인
    public DiaryComment findVerifiedDiaryComment(long diaryCommentId) {
        Optional<DiaryComment> optionalDiaryComment = diaryCommentRepository.findById(diaryCommentId);
        DiaryComment findDiaryComment = optionalDiaryComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.DIARY_COMMENT_NOT_FOUND));

        return findDiaryComment;
    }

    private DiaryComment saveDiaryComment(DiaryComment diaryComment) {
        return diaryCommentRepository.save(diaryComment);
    }
}
