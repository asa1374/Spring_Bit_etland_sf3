package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.CategoryDTO;
import com.bit_etland.web.proxy.Proxy;
@Repository
public interface CategoryMapper {
	public void insertCategory(CategoryDTO cat);
	public List<?> selectCategoryList(Proxy pxy);
	public List<?> selectCategoris(Proxy pxy);
	public CategoryDTO selectCategory(String searchWord);
	public int countCategory(Proxy pxy);
	public void updateCategory(CategoryDTO cat);
	public void deleteCategory(CategoryDTO cat);
}
