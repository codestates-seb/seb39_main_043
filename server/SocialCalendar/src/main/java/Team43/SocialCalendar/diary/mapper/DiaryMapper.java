package Team43.SocialCalendar.diary.mapper;

import Team43.SocialCalendar.diary.dto.DiaryPatchDto;
import Team43.SocialCalendar.diary.dto.DiaryPostDto;
import Team43.SocialCalendar.diary.dto.DiaryResponseDto;
import Team43.SocialCalendar.diary.entity.Diary;
import Team43.SocialCalendar.member.entity.Member;
import Team43.SocialCalendar.schedule.entity.Schedule;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DiaryMapper {

    List<DiaryResponseDto> diariesToDiaryResponseDtos(List<Diary> diaries);

    default Diary diaryPatchDtoToDiary(DiaryPatchDto diaryPatchDto) {
        if (diaryPatchDto == null) {
            return null;
        } else {
            Diary diary = new Diary();
            diary.setDiaryId(diaryPatchDto.getDiaryId());
            diary.setContents(diaryPatchDto.getContents());
            diary.setDiaryImg(diaryPatchDto.getDiaryImg());

            return diary;
        }
    }

    default Diary diaryPostDtoToDiary(DiaryPostDto diaryPostDto) {
        Diary diary = new Diary();
        Schedule schedule = new Schedule();
        Member member = new Member();
        schedule.setScheduleId(diaryPostDto.getScheduleId());
        member.setMemberId(diaryPostDto.getMemberId());
        diary.setSchedule(schedule);
        diary.setMember(member);
        diary.setContents(diaryPostDto.getContents());
        diary.setDiaryImg(diaryPostDto.getDiaryImg());

        return diary;
    }

    default DiaryResponseDto diaryToDiaryResponseDto(Diary diary) {
        DiaryResponseDto diaryResponseDto = new DiaryResponseDto();

        diaryResponseDto.setDiaryId(diary.getDiaryId());
        diaryResponseDto.setContents(diary.getContents());
        diaryResponseDto.setDiaryImg(diary.getDiaryImg());

        diaryResponseDto.setSchedule(diary.getSchedule());

        diaryResponseDto.setMember(diary.getMember());
        diaryResponseDto.setName(diary.getMember().getName());
        diaryResponseDto.setMemberImg(diary.getMember().getMemberImg());

        diaryResponseDto.setCreatedAt(diary.getCreatedAt());

        return diaryResponseDto;
    }
}
