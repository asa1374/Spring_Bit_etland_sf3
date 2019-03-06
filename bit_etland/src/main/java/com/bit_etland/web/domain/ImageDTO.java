package com.bit_etland.web.domain;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class ImageDTO {
	private String imgseq,imgName,imgExtention,owner;
}
