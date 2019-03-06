package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.bit_etland.web.domain.ShipperDTO;

@Component
public interface ShipperMapper {
	public void registShipper(ShipperDTO ship);
	public List<ShipperDTO> bringShipperList();
	public List<ShipperDTO> retrieveShippers(String searchWord);
	public ShipperDTO retrieveShipper(String searchWord);
	public int countShipper();
	public void modifyShipper(String searchWord);
	public void removeShipper(String searchWord);
}
