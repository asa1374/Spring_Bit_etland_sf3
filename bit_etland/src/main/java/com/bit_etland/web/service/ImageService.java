package com.bit_etland.web.service;

import java.util.List;

import com.bit_etland.web.domain.ImageDTO;
import com.bit_etland.web.proxy.Proxy;


public interface ImageService {
	public void addImage(ImageDTO img);
	public List<ImageDTO> imageList(Proxy pxy);
	public List<ImageDTO> searchImage(Proxy pxy);
	public ImageDTO oneImage(ImageDTO img);
	public int countImage(Proxy pxy);
	public void modifiedImage(Proxy pxy);
	public void removeImage(Proxy pxy);
}
