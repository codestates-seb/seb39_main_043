package Team43.SocialCalendar.diary.service;

import Team43.SocialCalendar.diary.entity.Diary;
import Team43.SocialCalendar.diary.repository.DiaryRepository;
import Team43.SocialCalendar.exception.BusinessLogicException;
import Team43.SocialCalendar.exception.ExceptionCode;
import Team43.SocialCalendar.member.service.MemberService;
import Team43.SocialCalendar.schedule.service.ScheduleService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class DiaryService {

    private final DiaryRepository diaryRepository;

    private final MemberService memberService;

    private final ScheduleService scheduleService;

    public DiaryService(DiaryRepository diaryRepository,
                        MemberService memberService,
                        ScheduleService scheduleService) {
        this.diaryRepository = diaryRepository;
        this.memberService = memberService;
        this.scheduleService = scheduleService;
    }

    public Diary createDiary(Diary diary) {
        verifyDiarySchedule(diary);
        verifyDiaryMember(diary);
        Diary savedDiary = saveDiary(diary);

        return savedDiary;
    }

    public Diary findDiary(long diaryId) {
        return findVerifiedDiary(diaryId);
    }

    public List<Diary> findDiaries() {
        return (List<Diary>) diaryRepository.findAll();
    }

    public Diary updateDiary(Diary diary) {
        Diary findDiary = findVerifiedDiary(diary.getDiaryId());

//        Optional.ofNullable(diary.getTitle()).ifPresent(title -> findDiary.setTitle(title));
        Optional.ofNullable(diary.getContents()).ifPresent(contents -> findDiary.setContents(contents));
        Optional.ofNullable(diary.getDiaryImg()).ifPresent(diaryImg -> findDiary.setDiaryImg(diaryImg));

        findDiary.setModifiedAt(LocalDateTime.now());

        return diaryRepository.save(findDiary);
    }

    public void deleteDiary(long diaryId) {
        Diary diary = findVerifiedDiary(diaryId);
        diaryRepository.delete(diary);
    }

    // 존재하는 스케줄인지 검증하는 메서드를 다이어리 서비스에서도 쓰기 위한 메서드
    private void verifyDiarySchedule(Diary diary) {
        scheduleService.verifyExistSchedule(diary.getSchedule().getScheduleId());
    }

    // 존재하는 회원인지 검증하는 메서드를 다이어리 서비스에서도 쓰기 위한 메서드
    private void verifyDiaryMember(Diary diary) {
        memberService.findVerifiedMember(diary.getMember().getMemberId());
    }

    // 존재하는 다이어리인지 확인
    public Diary findVerifiedDiary(long diaryId) {
        Optional<Diary> optionalDiary = diaryRepository.findById(diaryId);
        Diary findDiary = optionalDiary.orElseThrow(() -> new BusinessLogicException(ExceptionCode.DIARY_NOT_FOUND));

        return findDiary;
    }

    private Diary saveDiary(Diary diary) {
        return diaryRepository.save(diary);
    }
}
