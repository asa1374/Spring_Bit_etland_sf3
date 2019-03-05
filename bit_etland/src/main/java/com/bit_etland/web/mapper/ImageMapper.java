package com.bit_etland.web.mapper;

import java.util.List;

import com.bit_etland.web.domain.ImageDTO;
import com.bit_etland.web.proxy.Proxy;

public interface ImageMapper {
	public void createImage(ImageDTO img);
	public List<ImageDTO> selectimageList(Proxy pxy);
	public List<ImageDTO> selectImages(Proxy pxy);
	public ImageDTO selectImage(ImageDTO img);
	public String lastImageSeq();
	public int countImage(Proxy pxy);
	public void updateImage(Proxy pxy);
	public void deleteImage(Proxy pxy);
}
