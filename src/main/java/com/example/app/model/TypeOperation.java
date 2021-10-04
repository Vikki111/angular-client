package com.example.app.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "type_operation")
@Data
public class TypeOperation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_operation_id")
    private Integer typeOperationId;
    @Column(name = "type_operation_name")
    private String typeOperationName;
}
