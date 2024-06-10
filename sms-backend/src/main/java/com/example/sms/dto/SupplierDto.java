package com.example.sms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class  SupplierDto {
    private Long id;

    private String email;
    private String name;
    private String tradeName;
    private String cnpjOrCpf;
    private String taxRegimeCode;
    private String customerSince;

    private String stateRegistration;
    private String municipalRegistration;
    private String zipCode;
    private String state;
    private String city;
    private String neighborhood;
    private String street;
    private String number;
    private String complement;

    private String contactInfo;
    private String contactPerson;
    private String phone;
    private String fax;
    private String mobile;
    private String website;

}