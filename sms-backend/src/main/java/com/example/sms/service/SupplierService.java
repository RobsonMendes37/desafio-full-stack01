package com.example.sms.service;

import com.example.sms.dto.SupplierDto;

import java.util.List;

public interface SupplierService {
    SupplierDto createSupplier(SupplierDto supplierDto);

    SupplierDto getSupplierById(Long supplierId);

    List<SupplierDto> getAllSuppliers();

    SupplierDto updateSupplier(Long supplierId, SupplierDto updatedSupplier);

    void deleteSupplier(Long supplierId);
}




