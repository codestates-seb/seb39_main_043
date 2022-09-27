package Team43.SocialCalendar.schedule.controller;

import Team43.SocialCalendar.schedule.dto.SchedulePatchDto;
import Team43.SocialCalendar.schedule.dto.SchedulePostDto;
import Team43.SocialCalendar.schedule.entity.Schedule;
import Team43.SocialCalendar.schedule.mapper.ScheduleMapper;
import Team43.SocialCalendar.schedule.service.ScheduleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/schedules")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ScheduleController {
    private final ScheduleService scheduleService;
    private final ScheduleMapper mapper;

    public ScheduleController(ScheduleService scheduleService, ScheduleMapper mapper) {
        this.scheduleService = scheduleService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postSchedule(@Valid @RequestBody SchedulePostDto schedulePostDto) {

        log.info("postSchedule");
        Schedule response = scheduleService.createSchedule(mapper.schedulePostDtoToSchedule(schedulePostDto));

        return new ResponseEntity<>(
                mapper.scheduleToScheduleResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{schedule-id}")
    public ResponseEntity updateSchedule(@PathVariable("schedule-id") long scheduleId,
                                         @Valid @RequestBody SchedulePatchDto schedulePatchDto) {

        log.info("updateSchedule");
        schedulePatchDto.setScheduleId(scheduleId);
        Schedule response = scheduleService.updateSchedule(mapper.schedulePatchDtoToSchedule(schedulePatchDto));

        return new ResponseEntity<>(
                mapper.scheduleToScheduleResponseDto(response), HttpStatus.OK);
    }

    @GetMapping("/{schedule-id}")
    public ResponseEntity getSchedule(@PathVariable("schedule-id") long scheduleId) {

        log.info("getSchedule");
        Schedule response = scheduleService.findSchedule(scheduleId);

        return new ResponseEntity<>(mapper.scheduleToScheduleResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("{schedule-id}")
    public ResponseEntity deleteSchedule(@PathVariable("schedule-id") long scheduleId) {

        log.info("deleteSchedule");
        scheduleService.deleteSchedule(scheduleId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
