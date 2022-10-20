package Team43.SocialCalendar.schedule.service;

import Team43.SocialCalendar.schedule.entity.Schedule;
import Team43.SocialCalendar.schedule.repository.ScheduleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {

    private final ScheduleRepository scheduleRepository;

    public ScheduleService(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    public Schedule createSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public Schedule updateSchedule(Schedule schedule) {

        Schedule findSchedule = verifyExistSchedule(schedule.getScheduleId());

        Optional.ofNullable(schedule.getTitle())
                .ifPresent(title -> findSchedule.setTitle(title));

        Optional.ofNullable(schedule.getScheduleAt())
                .ifPresent(scheduleAt -> findSchedule.setScheduleAt(scheduleAt));

        Optional.ofNullable(schedule.getAttendees())
                .ifPresent(attendees -> findSchedule.setAttendees(attendees));

        Optional.ofNullable(schedule.getLocation())
                .ifPresent(location -> findSchedule.setLocation(location));

        Optional.ofNullable(schedule.getContents())
                .ifPresent(contents -> findSchedule.setContents(contents));

        Optional.ofNullable(schedule.getDiaryInfo())
                .ifPresent(diaryInfo -> findSchedule.setDiaryInfo(diaryInfo));

        return scheduleRepository.save(findSchedule);
    }

    public Schedule findSchedule(long scheduleId) {

        Optional<Schedule> optionalSchedule = scheduleRepository.findById(scheduleId);
        Schedule findSchedule = optionalSchedule.orElseThrow(() -> new IllegalArgumentException("No Schedule here"));

        return findSchedule;
    }

    public List<Schedule> findSchedulesByCalendarId(long calendarId) {
        return scheduleRepository.findScheduleByCalendar_CalendarId(calendarId);
    }

    public void deleteSchedule(long scheduleId) {
        Schedule findSchedule = verifyExistSchedule(scheduleId);

        scheduleRepository.delete(findSchedule);
    }

    public Schedule verifyExistSchedule(Long scheduleId) {
        Optional<Schedule> optionalSchedule =
                scheduleRepository.findById(scheduleId);
        Schedule findSchedule = optionalSchedule
                .orElseThrow(() -> new IllegalArgumentException("No Schedule here!"));

        return findSchedule;
    }
}