package com.bit_etland.web.mapper;

import java.util.List;

import com.bit_etland.web.domain.OrderDetailDTO;

public interface OrderDetailMapper {
	public void registOrderDetail(OrderDetailDTO ord);
	public List<OrderDetailDTO> bringOrderDetailList();
	public List<OrderDetailDTO> retrieveOrderDetails(String searchWord);
	public OrderDetailDTO retrieveOrderDetail(String searchWord);
	public int countOrderDetail();
	public void modifyOrderDetail(String searchWord);
	public void removeOrderDetail(String searchWord);
}
