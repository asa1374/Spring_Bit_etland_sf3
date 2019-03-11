package com.bit_etland.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.CustomerDTO;
import com.bit_etland.web.proxy.Proxy;
@Repository
public interface CustomerMapper {
	public void resistCustomer(CustomerDTO cus);
	public List<CustomerDTO> bringCustomerList(Proxy pxy);
	public List<CustomerDTO> selectCategoris(Proxy pxy);
	public CustomerDTO selectCustomer(CustomerDTO cus);
	public int countCustomer(Proxy pxy);
	public void modifyCustomer(CustomerDTO cus);
	public Map<String, Object> selectProfile(Proxy pxy);
	public void removeCustomer(CustomerDTO cus);
	public Map<String, Object> selectPhone(Proxy pxy);
}
