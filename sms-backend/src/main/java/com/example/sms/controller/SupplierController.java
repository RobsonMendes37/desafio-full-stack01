package com.example.sms.controller;

import lombok.AllArgsConstructor;
import com.example.sms.dto.SupplierDto;
import com.example.sms.service.SupplierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/suppliers")
public class  SupplierController {

    private SupplierService supplierService;

    // Build Add Supplier REST API
    @PostMapping
    public ResponseEntity<SupplierDto> createSupplier(@RequestBody SupplierDto supplierDto){
        SupplierDto savedSupplier = supplierService.createSupplier(supplierDto);
        return new ResponseEntity<>(savedSupplier, HttpStatus.CREATED);
    }

    // Build Get Supplier REST API
    @GetMapping("{id}")
    public ResponseEntity<SupplierDto> getSupplierById(@PathVariable("id") Long supplierId){
        SupplierDto supplierDto = supplierService.getSupplierById(supplierId);
        return ResponseEntity.ok(supplierDto);
    }
 
    // Build Get All Suppliers REST API
    @GetMapping
    public ResponseEntity<List<SupplierDto>> getAllSuppliers(){
        List<SupplierDto> suppliers = supplierService.getAllSuppliers();
        return ResponseEntity.ok(suppliers);
    }

    // Build Update Supplier REST API
    @PutMapping("{id}")
    public ResponseEntity<SupplierDto> updateSupplier(@PathVariable("id") Long supplierId,
                                                      @RequestBody SupplierDto updatedSupplier){
        SupplierDto supplierDto = supplierService.updateSupplier(supplierId, updatedSupplier);
        return ResponseEntity.ok(supplierDto);
    }

    // Build Delete Supplier REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSupplier(@PathVariable("id") Long supplierId){
        supplierService.deleteSupplier(supplierId);
        return ResponseEntity.ok("Supplier deleted successfully!.");
    }
}