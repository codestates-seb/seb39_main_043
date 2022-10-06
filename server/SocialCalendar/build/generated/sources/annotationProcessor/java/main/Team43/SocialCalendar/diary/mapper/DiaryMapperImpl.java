package Team43.SocialCalendar.diary.mapper;

import Team43.SocialCalendar.diary.dto.DiaryResponseDto;
import Team43.SocialCalendar.diary.entity.Diary;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-06T17:10:49+0900",
    comments = "version: 1.5.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.5.jar, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class DiaryMapperImpl implements DiaryMapper {

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
}
