package com.example.sms.service.impl;


import lombok.AllArgsConstructor;

import com.example.sms.dto.SupplierDto;
import com.example.sms.entity.Supplier;
import com.example.sms.exception.ResourceNotFoundException;
import com.example.sms.mapper.SupplierMapper;
import com.example.sms.repository.SupplierRepository;
import com.example.sms.service.SupplierService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class SupplierServiceImpl implements SupplierService {

    private SupplierRepository supplierRepository;

    @Override
    public SupplierDto createSupplier(SupplierDto supplierDto) {

        Supplier supplier = SupplierMapper.mapToSupplier(supplierDto);
        Supplier savedSupplier = supplierRepository.save(supplier);
        return SupplierMapper.mapToSupplierDto(savedSupplier);
    }


   @Override
   public SupplierDto getSupplierById(Long supplierId) {
        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Supplier is not exists with given id : " + supplierId));

        return SupplierMapper.mapToSupplierDto(supplier);
    }

    @Override
    public List<SupplierDto> getAllSuppliers() {
        List<Supplier> suppliers = supplierRepository.findAll();
        return suppliers.stream().map((supplier) -> SupplierMapper.mapToSupplierDto(supplier))
                .collect(Collectors.toList());
    }

    @Override
    public SupplierDto updateSupplier(Long supplierId, SupplierDto updatedSupplier) {

        Supplier supplier = supplierRepository.findById(supplierId).orElseThrow(
                () -> new ResourceNotFoundException("Supplier is not exists with given id: " + supplierId)
        );


        supplier.setEmail(updatedSupplier.getEmail());
        supplier.setName(updatedSupplier.getName());
        supplier.setTradeName(updatedSupplier.getTradeName());
        supplier.setCnpjOrCpf(updatedSupplier.getCnpjOrCpf());
        supplier.setTaxRegimeCode(updatedSupplier.getTaxRegimeCode());
        supplier.setCustomerSince(updatedSupplier.getCustomerSince());
        supplier.setStateRegistration(updatedSupplier.getStateRegistration());
        supplier.setMunicipalRegistration(updatedSupplier.getMunicipalRegistration());
        supplier.setZipCode(updatedSupplier.getZipCode());
        supplier.setState(updatedSupplier.getState());
        supplier.setCity(updatedSupplier.getCity());
        supplier.setNeighborhood(updatedSupplier.getNeighborhood());
        supplier.setStreet(updatedSupplier.getStreet());
        supplier.setNumber(updatedSupplier.getNumber());

        supplier.setComplement(updatedSupplier.getComplement());

        supplier.setContactInfo(updatedSupplier.getContactInfo());
        supplier.setContactPerson(updatedSupplier.getContactPerson());
        supplier.setPhone(updatedSupplier.getPhone());
        supplier.setFax(updatedSupplier.getFax());
        supplier.setMobile(updatedSupplier.getMobile());
        supplier.setWebsite(updatedSupplier.getWebsite());

        Supplier updatedSupplierObj = supplierRepository.save(supplier);

        return SupplierMapper.mapToSupplierDto(updatedSupplierObj);
    }

    @Override
    public void deleteSupplier(Long supplierId) {

        Supplier supplier = supplierRepository.findById(supplierId).orElseThrow(
                () -> new ResourceNotFoundException("Supplier is not exists with given id: " + supplierId)
        );

        supplierRepository.deleteById(supplierId);
    }
}