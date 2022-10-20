package Team43.SocialCalendar.diary.comment.controller;

import Team43.SocialCalendar.diary.comment.dto.DiaryCommentPostDto;
import Team43.SocialCalendar.diary.comment.entity.DiaryComment;
import Team43.SocialCalendar.diary.comment.mapper.DiaryCommentMapper;
import Team43.SocialCalendar.diary.comment.service.DiaryCommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/diarycomments")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DiaryCommentController {

    private final DiaryCommentService diaryCommentService;
    private final DiaryCommentMapper mapper;

    public DiaryCommentController(DiaryCommentService diaryCommentService, DiaryCommentMapper mapper) {
        this.diaryCommentService = diaryCommentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postDiaryComment(@RequestBody DiaryCommentPostDto diaryCommentPostDto) {
        DiaryComment diaryComment = diaryCommentService.createDiaryComment(
                mapper.diaryCommentPostDtoToDiaryComment(diaryCommentPostDto));

        return new ResponseEntity<>(mapper.diaryCommentToDiaryCommentResponseDto(diaryComment), HttpStatus.CREATED);
    }

    @GetMapping("/{diary-id}")
    public ResponseEntity getDiaryCommentsByDiaryId(@PathVariable("diary-id") @Positive long diaryId) {
        List<DiaryComment> diaryComments = diaryCommentService.findDiaryCommentsByDiaryId(diaryId);

        return new ResponseEntity<>(mapper.diaryCommentsToDiaryCommentResponseDtos(diaryComments), HttpStatus.OK);
    }
}
