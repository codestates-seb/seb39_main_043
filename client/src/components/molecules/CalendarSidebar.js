import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component --->
const StyledCalendarProfile = styled(atoms.CalendarProfile)`
  margin-right: 16px;
`;

const StyledCalendarAddButton = styled(atoms.CalendarAddButton)`
  margin-bottom: 16px;
`;

// <--- CalendarSideBar --->
const CalendarSideBar = () => {
  // 테스트 데이터
  const dummyData = {
    item: [
      { id: 1, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더1" },
      { id: 2, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더2" },
      { id: 3, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더3" },
      { id: 4, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더4" },
      { id: 5, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더5" },
      { id: 6, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더6" },
      { id: 7, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더7" },
      { id: 8, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더8" },
      { id: 9, imgURL: "https://random.imagecdn.app/500/150", content: "캘린더9" },
    ],
  };

  return (
    <atoms.CalendarSidebarContainer>
      {/* 캘린더 추가 버튼 */}
      <div>
        <StyledCalendarAddButton />
      </div>

      {/* 캘린더 영역 */}
      {dummyData.item.map((value) => {
        return (
          <atoms.CalendarItemContainer key={value.id}>
            <StyledCalendarProfile imgURL={value.imgURL} />
            <atoms.CalendarName content={value.content} />
          </atoms.CalendarItemContainer>
        );
      })}
    </atoms.CalendarSidebarContainer>
  );
};

export default CalendarSideBar;
