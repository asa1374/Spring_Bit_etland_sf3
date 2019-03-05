package com.bit_etland.web.service;

import java.util.List;

import com.bit_etland.web.domain.SupplierDTO;

public interface SupplierService {
	public void registSupplier(SupplierDTO sup);
	public List<SupplierDTO> bringSupplierList();
	public List<SupplierDTO> retrieveSuppliers(String searchWord);
	public SupplierDTO retrieveSupplier(String searchWord);
	public int countSupplier();
	public void modifySupplier(SupplierDTO sup);
	public void removeSupplier(SupplierDTO sup);
}
