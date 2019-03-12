<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!-- 
	@작성자: 이창준 (asa1374@gmail.com)
	@작성일자: 2019. 3. 12. 09:53:32
	@파일명: customer.jsp
	@기능: 고객 템플릿 페이지
-->
<jsp:include page="common.jsp"></jsp:include>
<body>
	<div id="wrapper" class="grid-container container-fluid">
		<nav id="main-nav">
			<tiles:insertAttribute name="nav" />
		</nav>
		<div id="header" class="home" style="background: url('/resources/images/home-bg.jpg') repeat scroll center center / cover;">
			<tiles:insertAttribute name="top" />
		</div>
		<div id="journal" class="text-left paddsection">
			<tiles:insertAttribute name="blog" />
		</div>
		<div id="contact" class="paddsection">
				<tiles:insertAttribute name="content" />
		</div>
		<div id="footer" class="text-center">
			<tiles:insertAttribute name="bottom" />
		</div>
	</div>
<script src="${js}/jquery/jquery.min.js"></script>
<script src="${js}/jquery/jquery-migrate.min.js"></script>
<script src="${js}/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="${js}/typed/typed.js"></script>
<script src="${js}/owlcarousel/owl.carousel.min.js"></script>
<script src="${js}/magnific-popup/magnific-popup.min.js"></script>
<script src="${js}/isotope/isotope.pkgd.min.js"></script>

  <!-- Contact Form JavaScript File -->
<script src="${contact}/contactform.js"></script>

  <!-- Template Main Javascript File -->
<script src="${js}/main.js"></script>
</body>
</html>