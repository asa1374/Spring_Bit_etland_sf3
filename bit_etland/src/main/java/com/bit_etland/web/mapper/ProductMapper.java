package com.bit_etland.web.mapper;

import java.util.List;

import com.bit_etland.web.domain.ProductDTO;
import com.bit_etland.web.proxy.Proxy;


public interface ProductMapper {
	public void registProduct(ProductDTO pro);
	public List<ProductDTO> bringProductList(Proxy pxy);
	public List<ProductDTO> retrieveProducts(Proxy pxy);
	public ProductDTO retrieveProduct(ProductDTO pro);
	public int countProduct(Proxy pxy);
	public void modifyProduct(ProductDTO pro);
	public void removeProduct(ProductDTO pro);
}
