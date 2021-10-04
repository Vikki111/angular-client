package com.example.app.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "type_operation")
@Data
public class TypeOperation {
    @Id
    @Column(name = "type_operation_id")
    private Integer typeOperationId;
    @Column(name = "type_operation_name")
    private String typeOperationName;
}
