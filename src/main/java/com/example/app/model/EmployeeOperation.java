package com.example.app.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "employee_operation")
@Data
public class EmployeeOperation {
    @Id
    @Column(name = "order_number")
    private Integer orderNumber;
    @Column(name = "date_operation")
    private Date dateOperation;
    @Column(name = "reg_number")
    private Integer regNumber;
    @Column(name = "position_id")
    private Integer positionId;
    @Column(name = "type_operation_id")
    private Integer typeOperationId;
    @Column(name = "department_id")
    private Integer departmentId;
}
