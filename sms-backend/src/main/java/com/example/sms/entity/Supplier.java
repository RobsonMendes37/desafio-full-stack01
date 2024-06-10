package com.example.sms.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "suppliers")
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Personal Data
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "trade_name")
    private String tradeName;

    @Column(name = "cnpj_or_cpf")
    private String cnpjOrCpf;

    @Column(name = "tax_regime_code")
    private String taxRegimeCode;

    @Column(name = "customer_since")
    private String customerSince;

    @Column(name = "state_registration")
    private String stateRegistration;

    @Column(name = "municipal_registration")
    private String municipalRegistration;

    //Addres
    @Column(name = "zip_code")
    private String zipCode;

    @Column(name = "state")
    private String state;

    @Column(name = "city")
    private String city;

    @Column(name = "neighborhood")
    private String neighborhood;

    @Column(name = "street")
    private String street;

    @Column(name = "number")
    private String number;

    @Column(name = "complement")
    private String complement;

//    //Contact
    @Column(name = "contact_info")
    private String contactInfo;

    @Column(name = "contact_person")
    private String contactPerson;

    @Column(name = "phone")
    private String phone;

    @Column(name = "fax")
    private String fax;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "website")
    private String website;

}
