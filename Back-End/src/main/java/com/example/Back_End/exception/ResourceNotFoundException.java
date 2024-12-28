package com.example.Back_End.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//gửi thông báo lỗi (Not_Found) đến client
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

    //ĐƯA RA NGOẠI LỆ KHI KHÔNG TÌM THẤY TRONG DATABASE
    public ResourceNotFoundException(String message) {
        super(message);
    }

}
