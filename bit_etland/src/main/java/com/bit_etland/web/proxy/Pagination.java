package com.bit_etland.web.proxy;

public class Pagination implements Proxy{
	private int pageNum, pageSize, blockSize,totalCount,blockNum,
				startRow,endRow,startPage,endPage,prevBlock,nextBlock,pageCount;
	private boolean existPrev, existnext;
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getBlockSize() {
		return blockSize;
	}
	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getBlockNum() {
		return blockNum;
	}
	public void setBlockNum(int blockNum) {
		this.blockNum = blockNum;
	}
	public int getStartRow() {
		return startRow;
	}
	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}
	public int getEndRow() {
		return endRow;
	}
	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}
	public int getStartPage() {
		return startPage;
	}
	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}
	public int getEndPage() {
		return endPage;
	}
	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}
	public int getPrevBlock() {
		return prevBlock;
	}
	public void setPrevBlock(int prevBlock) {
		this.prevBlock = prevBlock;
	}
	public int getNextBlock() {
		return nextBlock;
	}
	public void setNextBlock(int nextBlock) {
		this.nextBlock = nextBlock;
	}
	public int getPageCount() {
		return pageCount;
	}
	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;
	}
	public boolean isExistPrev() {
		return existPrev;
	}
	public void setExistPrev(boolean existPrev) {
		this.existPrev = existPrev;
	}
	public boolean isExistnext() {
		return existnext;
	}
	public void setExistnext(boolean existnext) {
		this.existnext = existnext;
	}
	@Override
	public void carryOut(Object o) {
		/*
		 * HttpServletRequest request = (HttpServletRequest)o; pageSize =
		 * (request.getParameter("page_size")==null)?5:Integer.parseInt(request.
		 * getParameter("page_size")); pageNum =
		 * (request.getParameter("page_num")==null)?1:Integer.parseInt(request.
		 * getParameter("page_num")); blockSize =
		 * (request.getParameter("block_size")==null)?5:Integer.parseInt(request.
		 * getParameter("block_size")); blockNum =
		 * (request.getParameter("block_num")==null)?0:Integer.parseInt(request.
		 * getParameter("block_num"));
		 * 
		 * switch (Action.valueOf(request.getParameter("cmd").toUpperCase())) { case
		 * ACCESS : case CUS_LIST: totalCount =
		 * CustomerServiceImpl.getInstance().countCustomer(null); break; case PRO_LIST:
		 * case PRO_REGIST : totalCount =
		 * ProductServiceImpl.getInstance().countProduct(null); break; case CATE_LIST:
		 * totalCount = CategoryServiceImpl.getInstance().countCategory(null); break;
		 * default: break; }
		 */
		
		startRow = pageSize*(pageNum-1)+1;
		endRow = pageNum * pageSize;
		endRow = (totalCount > endRow)?endRow:totalCount;
		pageCount = totalCount/pageSize;
		if(totalCount%pageSize!=0) {
			pageCount++;
		}
		blockNum = (int)Math.floor((pageNum-1)/ blockSize);
		startPage = blockNum*blockSize+1;
		endPage = startPage+(blockSize-1);
		if(endPage>pageCount) {
			endPage=pageCount;
		}
		existPrev = (blockSize>=pageNum)?false:true;
		existnext = (pageCount<=(startPage + pageSize))?false:true;
		prevBlock = startPage - pageSize;
		nextBlock = startPage + pageSize;
		System.out.println(totalCount);
		System.out.println("pageCountpageCount"+pageCount);
		System.out.println("startPage + pageSize"+startPage + pageSize);
		System.out.println("프리"+existPrev);
		System.out.println(existnext);
	}
}
