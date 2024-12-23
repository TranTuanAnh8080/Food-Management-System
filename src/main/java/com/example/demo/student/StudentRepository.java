package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// DATA ACCESS LAYER: TRUY XUẤT VÀ LẤY DỮ LIỆU TỪ DATABASE
// ĐƯỢC XEM NHƯ LÀ KHO LƯU TRỮ DỮ LIỆU
@Repository                                              //ĐỐI TƯỢNG, ID CỦA ĐỐI TƯỢNG
public interface StudentRepository extends JpaRepository<Student, Long> {

}