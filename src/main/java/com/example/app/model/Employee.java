package com.example.app.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "employee")
@Data
public class Employee {
    @Id
    @Column(name = "reg_number")
    private Integer regNumber;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "patronymic")
    private String patronymic;
    @Column(name = "birthday")
    private Date birthday;
    @Column(name = "gender")
    private String gender;
    @Column(name = "jobNumber")
    private Integer jobNumber;
    @Column(name = "home_number")
    private Integer homeNumber;
    @Column(name = "union_membership")
    private Boolean unionMembership;
    @Column(name = "street")
    private String street;
    @Column(name = "house")
    private String house;
    @Column(name = "apartment")
    private String apartment;
}