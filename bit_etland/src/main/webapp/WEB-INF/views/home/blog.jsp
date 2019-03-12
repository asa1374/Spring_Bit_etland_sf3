<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<div class="container">
      <div class="section-title text-center">
        <h2>ChangJun</h2>
      </div>
    </div>

    <div class="container">
      <div class="journal-block">
        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="journal-info">

              <a href="blog-single.html"><img src="${images}/blog-post-1.jpg" class="img-responsive" alt="img"></a>

              <div class="journal-txt">
                <h4><a id="signin_btn">회원 로그인</a></h4>
                <span id="">회원 가입</span>
              </div>

            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="journal-info">

              <a href="blog-single.html"><img src="${images}/blog-post-2.jpg" class="img-responsive" alt="img"></a>

              <div class="journal-txt">

                <h4><a href="#blog-single.html">관리자 로그인</a></h4>
                <h4><a href="#blog-single.html">관리자 등록</a></h4>

              </div>

            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="journal-info">

              <a href="blog-single.html"><img src="${images}/blog-post-3.jpg" class="img-responsive" alt="img"></a>

              <div class="journal-txt">

                <h4><a href="blog-single.html">NEW LIFE CIVILIZATIONS TO BOLDLY</a></h4>
                <p class="separator">To an English person, it will seem like simplified English
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
<script>
$('#signin_btn').attr('style','cursor:pointer').click(function(){
	location.assign('${ctx}/move/customer/signin');
});
</script>