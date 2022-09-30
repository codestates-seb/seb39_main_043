package Team43.SocialCalendar.exception;


import lombok.Getter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    CALENDAR_NOT_FOUND(404, "Calendar not found"),
    CALENDAR_EXISTS(409, "Calendar exists"),
    CALENDAR_ATTENDEE_NOT_FOUND(404, "CalendarAttendee not found"),
    DIARY_NOT_FOUND(404, "Diary not found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
