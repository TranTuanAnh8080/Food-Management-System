package com.example.demo;

import com.example.demo.student.Student;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@SpringBootApplication
//@RestController
//"RestController" để lấy dữ liệu từ server gửi về client
public class DemoApplication {

    public static void main(String[] args) {

        SpringApplication.run(DemoApplication.class, args);
    }

//    @GetMapping
//    public List<Student> helloWorld() {
//        return List.of(
//                new Student(
//                        "Tuấn Anh",
//                        "tuananh88@gmail.com",
//                        1L,
//                        LocalDate.of(2004, Month.AUGUST, 8),
//                        21
//
//                )
//        );
//    }


}
