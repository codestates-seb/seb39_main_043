package Team43.SocialCalendar.diary.mapper;

<<<<<<< HEAD
import Team43.SocialCalendar.diary.dto.DiaryResponseDto;
import Team43.SocialCalendar.diary.entity.Diary;
import java.util.ArrayList;
import java.util.List;
=======
>>>>>>> 78b8a80 (back/feat: Diary CRUD 추가)
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
<<<<<<< HEAD
    date = "2022-10-06T17:10:49+0900",
=======
    date = "2022-09-30T17:06:27+0900",
>>>>>>> 78b8a80 (back/feat: Diary CRUD 추가)
=======
    date = "2022-10-03T21:39:14+0900",
>>>>>>> 126360e (back/feat: Diary Comments 구현)
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.jar, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class DiaryMapperImpl implements DiaryMapper {
<<<<<<< HEAD

    @Override
    public List<DiaryResponseDto> diariesToDiaryResponseDtos(List<Diary> diaries) {
        if ( diaries == null ) {
            return null;
        }

        List<DiaryResponseDto> list = new ArrayList<DiaryResponseDto>( diaries.size() );
        for ( Diary diary : diaries ) {
            list.add( diaryToDiaryResponseDto( diary ) );
        }

        return list;
    }
=======
>>>>>>> 78b8a80 (back/feat: Diary CRUD 추가)
}
