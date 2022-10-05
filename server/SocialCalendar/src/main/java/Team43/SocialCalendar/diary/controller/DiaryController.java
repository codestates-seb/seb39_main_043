package Team43.SocialCalendar.diary.controller;

import Team43.SocialCalendar.diary.dto.DiaryPatchDto;
import Team43.SocialCalendar.diary.dto.DiaryPostDto;
import Team43.SocialCalendar.diary.dto.DiaryResponseDto;
import Team43.SocialCalendar.diary.entity.Diary;
import Team43.SocialCalendar.diary.mapper.DiaryMapper;
import Team43.SocialCalendar.diary.service.DiaryService;
import Team43.SocialCalendar.member.service.MemberService;
import Team43.SocialCalendar.schedule.service.ScheduleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/diaries")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DiaryController {
    private final DiaryService diaryService;
    private final DiaryMapper mapper;
    private final ScheduleService scheduleService;
    private final MemberService memberService;

    public DiaryController(DiaryService diaryService,
                           DiaryMapper mapper,
                           ScheduleService scheduleService,
                           MemberService memberService) {
        this.diaryService = diaryService;
        this.mapper = mapper;
        this.scheduleService = scheduleService;
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity postDiary(@RequestBody DiaryPostDto diaryPostDto) {
        Diary diary = diaryService.createDiary(mapper.diaryPostDtoToDiary(diaryPostDto));

        return new ResponseEntity<>(mapper.diaryToDiaryResponseDto(diary), HttpStatus.CREATED);
    }

    @GetMapping("/{diary-id}")
    public ResponseEntity getDiary(@PathVariable("diary-id") @Positive long diaryId) {
        Diary diary = diaryService.findDiary(diaryId);

        return new ResponseEntity<>(mapper.diaryToDiaryResponseDto(diary), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getDiaries() {
        List<Diary> diaries = diaryService.findDiaries();
        List<DiaryResponseDto> response = mapper.diariesToDiaryResponseDtos(diaries);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{diary-id}")
    public ResponseEntity patchDiary(@PathVariable("diary-id") @Positive long diaryId,
                                     @RequestBody DiaryPatchDto diaryPatchDto) {
        diaryPatchDto.setDiaryId(diaryId);
        Diary diary = diaryService.updateDiary(mapper.diaryPatchDtoToDiary(diaryPatchDto));

        return new ResponseEntity<>(mapper.diaryToDiaryResponseDto(diary), HttpStatus.OK);
    }

    @DeleteMapping("/{diary-id}")
    public ResponseEntity deleteDiary(@PathVariable("diary-id") long diaryId) {
        diaryService.deleteDiary(diaryId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
