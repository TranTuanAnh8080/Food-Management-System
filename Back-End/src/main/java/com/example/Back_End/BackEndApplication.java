package com.example.Back_End;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
// chuyển chuỗi JSON (requestBody) thành DTO cho spring-boot xử lý
// từ DTO chuyển thành dạng Entity để lưu vào CSDL(DATABASE)
public class BackEndApplication {

	public static void main(String[] args) {

		SpringApplication.run(BackEndApplication.class, args);
	}
}
