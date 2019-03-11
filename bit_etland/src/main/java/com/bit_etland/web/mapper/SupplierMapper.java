package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.SupplierDTO;

@Repository
public interface SupplierMapper {
	public void registSupplier(SupplierDTO sup);
	public List<SupplierDTO> bringSupplierList();
	public List<SupplierDTO> retrieveSuppliers(String searchWord);
	public SupplierDTO retrieveSupplier(String searchWord);
	public int countSupplier();
	public void modifySupplier(SupplierDTO sup);
	public void removeSupplier(SupplierDTO sup);
}
