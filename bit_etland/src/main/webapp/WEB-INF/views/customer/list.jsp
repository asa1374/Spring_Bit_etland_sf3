<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" 
	href="${css}/customer/list.css" />
<div class="grid-item" id="nav">
	<jsp:include page="../employee/nav.jsp"/>
</div>
<div class="grid-item" id="side_menu">
 	<h1><font style="font-size: 30px">고객 목록</font>
 	</h1>
</div>
<div class="grid-item" id="content">
	<table id="cust_tab">
	  <tr>
	    <th>No.</th>
	    <th>아이디</th>
	    <th>이 름</th>
	    <th>생년월일</th>
	    <th>성 별</th>
	    <th>전화번호</th>
	    <th>우편번호</th>
	    <th>지번주소</th>
	    <th>상세주소</th>
	  </tr>
	  <c:forEach items="${list}" var="cust" >
		  <tr>
		    <td>${cust.count}</td>
		    <td>${cust.customerID}</td>
		    <td><a href="${ctx}/customer.do?cmd=cust_retrieve&page=detail&customerID=${cust.customerID}">${cust.customerName}</a></td>
		    <td>${cust.ssn}</td>
		    <td>남</td>
		    <td>${cust.phone}</td>
		    <td>${cust.postalCode}</td>
		    <td>${cust.city}</td>
		    <td>${cust.address}</td>
		  </tr>
	  </c:forEach>
	</table>
	<div style="height: 50px"></div>
	<form id="list_form">
		<div class="center">
		  <div class="pagination">
		  <c:if test="${pagination.existPrev }">
			  <a href='${ctx}/customer.do?cmd=cus_list&page=list&page_size=5&page_num=${pagination.prevBlock}' >&laquo;</a>
		  </c:if>
		  <c:forEach begin="${pagination.startPage }" end="${pagination.endPage }" varStatus="status" >
			  <c:choose>
			  	<c:when test="${pagination.pageNum eq status.index }">
			  		<a href="#" class="page active">${status.index }</a>
			  	</c:when>
			  	<c:otherwise>
			  		<a href="#" class="page">${status.index }</a>
			  	</c:otherwise>	
			  </c:choose>
			  
		  </c:forEach>
		  <c:if test="${pagination.existnext }">
			  <a href='${ctx}/customer.do?cmd=cus_list&page=list&page_size=5&page_num=${pagination.nextBlock}' class="posblock">&raquo;</a>
		  </c:if>
		  </div>
		</div>
	</form>
</div>
<script>
//class="active"
$('.page').each(function( index ){
	$(this).click(function(){	
		location.assign('${ctx}/customer.do?cmd=cus_list&page=list&page_size=5&page_num='+$(this).text());
	});
});

/* $('#2page').click(function(){
	location.assign('${ctx}/customer.do?cmd=cus_list&page=list&page_size=5&page_num=2');
	//page_num, page_size, cmd, dir, page
	//cmd=list&page=list&page_num=2&page_size=5
}); */
</script>