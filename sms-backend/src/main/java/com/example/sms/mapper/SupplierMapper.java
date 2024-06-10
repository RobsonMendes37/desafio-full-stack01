package com.example.sms.mapper;

import com.example.sms.dto.SupplierDto;
import com.example.sms.entity.Supplier;

public class SupplierMapper {

    public static SupplierDto mapToSupplierDto(Supplier supplier){
        return new SupplierDto(
                supplier.getId(),

                supplier.getEmail(),
                supplier.getName(),
                supplier.getTradeName(),
                supplier.getCnpjOrCpf(),
                supplier.getTaxRegimeCode(),
                supplier.getCustomerSince(),
                supplier.getStateRegistration(),
                supplier.getMunicipalRegistration(),
                supplier.getZipCode(),
                supplier.getState(),
                supplier.getCity(),
                supplier.getNeighborhood(),
                supplier.getStreet(),
                supplier.getNumber(),
                supplier.getComplement(),

                supplier.getContactInfo(),
                supplier.getContactPerson(),
                supplier.getPhone(),
                supplier.getFax(),
                supplier.getMobile(),
                supplier.getWebsite()
        );
    }

    public static Supplier mapToSupplier(SupplierDto supplierDto){
        return new Supplier(
                supplierDto.getId(),

                supplierDto.getEmail(),
                supplierDto.getName(),
                supplierDto.getTradeName(),
                supplierDto.getCnpjOrCpf(),
                supplierDto.getTaxRegimeCode(),
                supplierDto.getCustomerSince(),
                supplierDto.getStateRegistration(),
                supplierDto.getMunicipalRegistration(),
                supplierDto.getZipCode(),
                supplierDto.getState(),
                supplierDto.getCity(),
                supplierDto.getNeighborhood(),
                supplierDto.getStreet(),
                supplierDto.getNumber(),
                supplierDto.getComplement(),

                supplierDto.getContactInfo(),
                supplierDto.getContactPerson(),
                supplierDto.getPhone(),
                supplierDto.getFax(),
                supplierDto.getMobile(),
                supplierDto.getWebsite()

        );
    }
}
