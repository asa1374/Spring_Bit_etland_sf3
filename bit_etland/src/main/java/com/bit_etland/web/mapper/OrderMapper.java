package com.bit_etland.web.mapper;
import java.util.List;

import com.bit_etland.web.domain.OrderDTO;


public interface OrderMapper {
	public void registOrder(OrderDTO or);
	public List<OrderDTO> bringOrderList();
	public List<OrderDTO> retrieveOrders(String searchWord);
	public OrderDTO retrieveOrder(String searchWord);
	public int countOrder();
	public void modifyOrder(String searchWord);
	public void removeOrder(String searchWord);
}
