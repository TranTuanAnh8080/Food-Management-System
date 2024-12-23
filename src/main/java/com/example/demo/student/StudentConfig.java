package com.example.demo.student;


import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.CommandLineRunner;

import java.util.List;

@Configurable
public class StudentConfig {


    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student a = new Student(
                    1,
                    "Nguyen Van c",
                    "nguyenvana@gmail.com"
            );

            Student b = new Student(
                    2,
                    "Nguyen Van B",
                    "nguyenvanB@gmail.com"
            );
            repository.saveAll(
                    List.of(a, b)
            );
        };
    }
}
