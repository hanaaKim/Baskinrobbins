let timer=setInterval("show()",3000); //슬라이드 함수
let no=0, i=0, size=0, index=0; 

//at1 공지사항 데이터
//json데이터 형태의 배열
const at1_notice_textA={
	//키값:값
	"at1_notice":[
		"o 배스킨 라빈스의 스페셜 MD를 만나보세요!",
		"o Taste The Original 새로워진 그린티, 31요거트!",
		"o 국내산 팥으로 더욱 맛있어진 팥빙수 블라스트 출시!",
		"o 워터프로세스 방식으로 카페인은 제거한 디카페인 커피 출시!",
		"o 달콤한 연유와 딸기 과육이 들어있는 딸기 연유 라떼 출시!",
		"o 월리를 찾아라 닮은꼴 콘테스트 당첨자 발표",
		"o 개인정보처리방침 변경 안내",
		"o 아이스크림과 함께 즐기는 배스킨라빙수 출시",
		"o 6월 이달의 맛 선거 투표 결과 발표",
		"깔끔한 산미와 따사로운 햇살같은 커피원두 카페브리즈 써니 출시!"
	]
};

//at4 슬라이드 텍스트
const at4_slideTextA=["오버 더 레인보우 샤베트","엄마는 외계인","아몬드 봉봉","민트 초콜릿 칩","뉴욕 치즈케이크",
"체리 쥬빌레","슈팅스타","오레오 쿠키 앤 크림","바람과 함께 사라지다","사랑에 빠진 딸기"];

const at4_icecream_text1A=["봉쥬르 마카롱","쫀떡궁합","초코나무 숲","디노 젤리",
"다정한 초코베어","시크릿 잔망 루피","오버 더 레인보우 케이크","해피 스마일 플라워"];
const at4_icecream_text2A=["#초콜릿 #크림치즈","#쫀떡 #인절미","#그린티 #초콜릿","#파인애플 #그린애플",
"#다정한초코베어","#엄마는외계인 #베리베리 스트로베리","#레인보우샤베트 #31요거트","#뉴욕치즈케이크 #엄마는외계인"];


//at8 데이터 배열들
const at8_textBox_1A=["Over The Rainbow Sherbet","Over The Rainbow Blast","BONJOUR MACARON","ZZON TTEOK ICE CREAM","CHOCOLATE FOREST","DINO JELLY","다정한 초코 베어","시크릿 잔망 루피"
,"오버 더 레인보우 케이크","해피 스마일 플라워"];
const at8_textBox_2A=["오버 더 레인보우 샤베트","오버 더 레인보우 블라스트","봉쥬르 마카롱","쫀떡궁합","초코나무 숲","디노젤리","","","",""];
const at8_textBox_3A=["라즈베리 샤베트, 오렌지 샤베트, 파인애플 샤베트에 상큼한 레몬&라임 샤베트가 어우러진 아이스크림",
					"시원한 레몬 라임, 히비스커스가 조화롭게 어울리는 상큼한 블라스트",
					"부드러운 크림치즈 아이스크림과 마카롱, 초콜릿의 달콤한 만남!",
					"고소한 흑임자, 인절미 아이스크림에 쫄깃한 떡 리본과 바삭한 프랄릴 피칸이 쏙쏙!",
					"2014년 아이스크림 콘테스트 1위 선정작",
					"파인애플. 그린애플 아이스크림에 알록달록 공룡젤리가 콩콩",
					"귀여운 곰돌이 모양을 그대로 형상화한 초콜릿 아이스크림과 6가지 색상의 초코볼을 가득 올려 비쥬얼 끝판왕 케이크",
					"인기 만점 '잔망' 루피 캐릭터의 얼굴 모양을 그대로 만들어 모자로 활용할 수 있는 실용적인 제품!",
					"3가지 맛 구슬 아이스크림이 숨어 있는 케이크에 스마일 쿠키, 구름 모양 머랭까지 더 한 매력만점 케이크",
					"'위글위글(Wiggle Wiggle)'과의 콜라보레이션을 통한 스마일 아이싱 쿠키와 부자재 디자인 적용으로 맛과 디자인 매력도를 함께 업그레이드한 제품"
];

//at8-제품 영양정보
const at8_img_bgA=["img/submenu/simple_bg0.jpg","img/submenu/simple_bg0.jpg","img/submenu/simple_bg2.jpg","img/submenu/simple_bg3.jpg","img/submenu/simple_bg4.jpg"
,"img/submenu/simple_bg5.jpg","img/submenu/simple_bg6.jpg","img/submenu/simple_bg7.jpg","img/submenu/simple_bg8.jpg","img/submenu/simple_bg9.jpg"]; //상단 배경
const at8_imgA=["img/submenu/img0.png","img/submenu/img1.png","img/menu/icecream2/img0.png","img/menu/icecream2/img1.png"
,"img/menu/icecream2/img2.png","img/menu/icecream2/img3.png", "img/menu/cake/img0.png","img/menu/cake/img1.png"
,"img/menu/cake/img2.png","img/menu/cake/img3.png"]; //제품 이미지

const at8_sub1 = ["115","505","115","115","115","115","627","351","534","672"]; //중량
const at8_sub2 = ["199","245","266","298","290","256","243","296","115","318"]; //열량
const at8_sub3 = ["27","60","23","35","23","25","6","23","198","26","27"]; //당류
const at8_sub4 = ["2","0","6","4","7","4","6","5","5","5"]; //단백질
const at8_sub5 = ["2.7","0","8","8","9","7","5","1","4","12"]; //포화지방
const at8_sub6 = ["24","1","86","83","15","73","101","114","67","96"] //나트륨
const at8_tree_subA =["우유","없음","우유, 대두, 계란, 땅콩","우유, 대두, 밀","우유, 대두, 밀","우유","우유, 대두","우유, 대두, 밀","우유, 대두","우유, 대두"]; //알레르기 성분

//슬라이드 텍스트 
const at8_text1A=["디노 젤리","샤인머스캣 블라스트","사랑에 빠진 딸기","월넛","엄마는 외계인","오버 더 레인보우 샤베트",
"뽀로로 친구들과 파티를","반가워 케어베어","해피 버스데이 케이크","스마일 위 러브"]; //슬라이드 1번째 텍스트
const at8_text2A=["애플 민트","설향 딸기 블라스트","베리베리 스트로베리","아이스 팥빙수","그린티","애플민트",
"니니즈 프렌즈 대출동","내친구 잔망 루피","레인보우 마카롱","듀얼 와츄원 NO.9"]; //슬라이드 2번째 텍스트
const at8_text3A=["머스크 멜론","레몬 라임 블라스트","뉴욕치즈케이크","자모카 아몬드 훠지","초콜릿","머스크 메론",
"레인보우 베어","내친구 뽀로로","핑크 구름 솜사탕","나눠먹는 와츄원"]; //슬라이드 3번째 텍스트

const at8_text4A=["#파인애플 #그린애플","#샤인머스캣 #청포도","크런치 초콜릿, 치즈 케이크, 스트로베리가 듬뿍","고소하고 향긋한 호두 아이스크림","밀크, 다크, 화이트 초콜릿 세가지 아이스크림에 달콤 바삭한 초코볼",
"파인애플, 라즈베리, 오렌지 샤베트","'뽀로로 친구들'을 모두 만날 수 있는 8가지 맛 케이크","MZ 세대에게 인기를 얻고 있는 '케어베어' 캐릭터 케이크","더욱 특별한 생일 파티를 만들어 주는 케이크","´위글위글´의 시그니처 플라워 초콜렛이 돋보이는 미니 케이크"]; //슬라이드 1-1번째 텍스트
const at8_text5A=["#애플민트 #사과","#딸기 #설향딸기","새콤상큼 딸기 과육이 듬뿍!","우유 아이스크림 속에 팥 리본과 떡 다이스가 쏙쏙","엄선된 녹차를 사용한 싱그러운 그린티 아이스크림",
"상큼한 사과와 시원한 민트향이 기분까지 상쾌","9가지 맛 조각 베이스로 나눠먹기 편리함 까지 잡은 케이크","잔망 루피의 얼굴이 입체 돔 케이크로 등장! ","동글동글 마카롱과 초코 쿠키로 데코한 6가지 맛 조각 케이크","9가지 베스트 플레이버로 구성된 스테디셀러 케이크"]; //슬라이드 2-1번째 텍스트
const at8_text6A=["#메론 #멜론","#레몬라임 #블랜디드","부드럽게 즐기는 뉴욕식 정통 치즈케이크 아이스크림","깊고 풍부한 자모카 아이스크림에 고소한 아몬드","진하고 부드러운 정통 초콜릿 아이스크림",
"후레쉬한 메론의 진하고 부드러운 맛","간편하고 부담없이 즐기기 좋은 미니 사이즈의 케이크","뽀로로 캐릭터의 얼굴을 그대로 형상화한 제품","핑크 구름 위 달콤한 6가지 맛 아이스크림","다양한 9가지 맛 아이스크림, 취식 후 보관까지 쉬운 케이크"]; //슬라이드 3-1번째 텍스트

const store_nameA=["강남역사","당산역","안양동편마을","홍대상상마당","마포구청역"];
const store_addrA=["서울 서초구 강남대로 지하 390","서울 영등포구 양평로 67","경기 안양시 동안구 동편로 6,115","서울 마포구 어울마당로 61(서교동)","서울 마포구 월드컵로 150"];
const store_tellA=["02-508-3103","02-2634-2231","031-425-0101","02-324-1222","02-325-1131"];
const store_timeA=["AM 10 ~ PM 11"];


/*--------------------함수선언------------------------*/
function show(){

	//메뉴 순위 슬라이드
	$(".at4_slideList").stop().animate({"left" : "-=30%"},1000,function(){
			$(".at4_slideList li:first").appendTo(".at4_slideList");
			$(".at4_slideList").css("left","+=30%");
		}
	);

	//공지사항 슬라이드
	$(".at1_notice_text").stop().animate({"top" : "-=100%"},1000,function(){
		$(".at1_notice_text li:first").appendTo(".at1_notice_text");
		$(".at1_notice_text").css("top","+=100%");
		
	});
	
}


function insert(no){
	$(".at8_img_bg").css("background","url("+at8_img_bgA[no]+") no-repeat center center").css("backgroundSize","cover");
	$(".at8_img").css("background","url("+at8_imgA[no]+") no-repeat center center").css("backgroundSize","contain");
	$(".at8_textBox_1").html(at8_textBox_1A[no]);
	$(".at8_textBox_2").html(at8_textBox_2A[no]);
	$(".at8_textBox_3").html(at8_textBox_3A[no]);
	//제품영양정보
	$(".at8_sub1").html(at8_sub1[no]);
	$(".at8_sub2").html(at8_sub2[no]);
	$(".at8_sub3").html(at8_sub3[no]);
	$(".at8_sub4").html(at8_sub4[no]);
	$(".at8_sub5").html(at8_sub5[no]);
	$(".at8_sub6").html(at8_sub6[no]);

	//알레르기 성분
	$(".at8_sub7").html(at8_tree_subA[no]);

	//슬라이드 텍스트 넣기
	$(".at8_text1:eq(0)").html(at8_text1A[no]);
	$(".at8_text1:eq(1)").html(at8_text2A[no]);
	$(".at8_text1:eq(2)").html(at8_text3A[no]);
	$(".at8_text2:eq(0)").html(at8_text4A[no]);
	$(".at8_text2:eq(1)").html(at8_text5A[no]);
	$(".at8_text2:eq(2)").html(at8_text6A[no]);

};


function scr_ani(){
	//article2 - 배스킨라빈스 소개
	// 상단 바로가기 링크 메뉴바 
	if(pos>100){
		$(".at2_menu").stop().animate({"top":"-180px"},500);
	}else{
		$(".at2_menu").stop().animate({"top":"0"},100);
	}
	
	if(pos<299){
		$(".at2_cont>.img1>img").stop().animate({"left":"-100%"},1000);
		$(".at2_cont>.img2>img").stop().animate({"right":"-110%"},1000);
	}else if(pos>300 && pos<600){
		$(".at2_cont>.img1>img").stop().animate({"left":"0%"},1000);
		$(".at2_cont>.img2>img").stop().animate({"right":"-40%"},1000);
		$(".at2_cont_text>h1").stop().animate({"top":"-15px"},1000).css("opacity","0");
	}else if(pos>800 && pos<900 ){
		$(".at2_cont_text>h1").stop().animate({"top":"0"},1000).css("opacity","1");
		$(".ice3").stop().animate({"top":"-290px"},700);
		$(".ice2").animate({"top":"-160px"},700);
		$(".ice1").animate({"top":"-30px"},700);
	}else if(pos>1500 && pos<1800){
		$(".ice3").stop().animate({"top":"-260px"},700,"easeOutBounce");
		$(".ice2").delay(500).animate({"top":"-130px"},700,"easeOutBounce");
		$(".ice1").delay(1000).animate({"top":"0"},700,"easeOutBounce");
		$(".img6>img").css("transform","scale(1)");
	}else if(pos>1900 && pos<2000){
		$(".img6>img").css("transform","scale(2)");
		$("#at2_2 .at2_cont .box2").stop().animate({"left":"-100%"},1000);
		$("#at2_2 .at2_cont .box3").stop().animate({"right":"-110%"},1000);
	}else if(pos>2100 && pos<2400){
		$("#at2_2 .at2_cont .box2").stop().animate({"left":"-100%"},1000);
		$("#at2_2 .at2_cont .box3").stop().animate({"right":"-110%"},1000);
	}else if(pos>2600 && pos<3500){
		$("#at2_2 .at2_cont .box2").stop().animate({"left":"0%"},1000);
		$("#at2_2 .at2_cont .box3").stop().animate({"right":"-20%"},1000);
		$("#at2_3 .at2_cont img").animate({"top":"-25px"},700);
	}else if(pos>3501 && pos<4300){
		$("#at2_3 .at2_cont img").animate({"top":"0"},700);
	}

	//article3 - 이달의 맛
	if(pos>0&&pos<10){
		$(".at3_cont1_icecream").stop().animate({"top":"120px","opacity":"1"},800,"easeOutBounce");
	}
}


//로그인 버튼 클릭시, 아이디와 비밀번호 유효성 체크 함수
function checkValue(){
	var id = $("#userId").val();
	var pw = $("#userPw").val();
	if(!id){
		alert("아이디를 입력하세요.");
		return false;
	}
	if(!pw){
		alert("비밀번호를 입력하세요.");
		return false;
	}

	alert(id+"님 로그인되었습니다.");
	$(".at").hide();
	$(".at1").show();
}


//회원가입완료 버튼 클릭시, 유효성 체크 함수
function checkValue2(){
	var email = $("#email").val();
	var pass1 = $("#pass1").val();
	var pass2 = $("#pass2").val();
	var name = $("#name").val();
	var tell = $("#tell").val();
	var number = $("#number").val();
	var birth  = $("#birth").val();

	var women = $('input[name="gender"]:checked').val();
	var men = $('input[name="gender"]:checked').val();
	

	//이메일 형식 체크
	var email_check =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

	if(!email){	alert("이메일을 입력하세요.");	return false;	}
	if(!email_check.test(email)){  alert("이메일을 형식에 맞게 입력해주세요."); return false;	 }
	//아이디 중복확인
	
	if(!pass1){	alert("비밀번호를 입력하세요.");	return false;	}
	if(!pass2){	alert("비밀번호 확인을 입력하세요.");	return false;}
	if(pass1 != pass2){	alert("비밀번호를 동일하게 입력하세요."); return false;}
	if(!name){	alert("성명을 입력하세요."); 	return false;	}
	if(!tell){	alert("전화번호를 입력하세요.");	return false;	}
	if(!number){  alert("인증번호를 입력하세요.");	return false;	}
	if(!birth){	 alert("생년월일을 입력하세요.");	return false;	}
	if(!women || !men){		alert("성을 선택하세요."); 	return false;	}

	
	agreefunc();

	if($("#agreeAll").is(":checked") == true){
		alert(name+"님 회원가입이 완료 되었습니다.");
		$(".at").hide();	$(".at6").show();
	}else{
		alert("약관에 모두 동의해주세요.")
	}
		
}

//회원가입 약관 동의체크 함수 
function agreefunc(){
	//전체선택
	var agree = $('input[name=agree]');
	$("#agreeAll").click(function(e){
		for(let i=0; i<agree.length; i++){
			agree[i].checked = e.target.checked;
		}
	});
	
	// 개별 체크
	agree.click(function(e){
		var is_checked = true;
		agree.each(function(){
			is_checked = is_checked && $(this).is(":checked");
		});
		$("#agreeAll").prop("checked", is_checked);
	});
}

/*--------------------제이쿼리------------------------*/	
$(function(){
	//스크롤 애니메이션 함수
	$(window).scroll(function(){
		pos=$(window).scrollTop();//현재스크롤값알아내기
		// console.log(pos);
		scr_ani(); //스크롤애니메이션
	})

	//at1_slideImg에 이미지 넣기
	size = $(".at1_slideImg li").length;
	for(i=0; i<size; i++){
		$(".at1_slideImg li:eq("+i+")").css("background","url(img/main/slide"+i+".jpg) no-repeat center")
									.css("backgroundSize","cover");
	}
	
    let at1_position; //=width값과 동일
	let at1_count=0; //클릭했을 때 카운트값
	$(".at1_slide_btn li:eq(0)").css("background","#224289");
	$(".at1_right_btn").css("background","#224289").css("color","white");

	//라디오 버튼 클릭했을 때 이미지 변하기
	$(".at1_slide_btn li").on("click",function(){ 
		at1_position=100; //=width값과 동일
		no=$(this).index();
		
		at1_count=no;
		at1_position = at1_position*no;
		
		$(".at1_slideImg").stop().animate({"left":-at1_position+"%"},500);
        
		$(".at1_slide_btn li").css("background","white"); //클릭한 거 색깔 바꾸기
		$(this).css("background","#224289");
	});
	
	//오른쪽 화살표 클릭시
	$(".at1_right_btn").on("click",function(){ 
		size = $(".at1_slideImg li").length;
		if(at1_count<size-1){
			at1_position=100;
			at1_count++;
		
			no=at1_count;
			at1_position = at1_position*at1_count;
			$(".at1_slideImg").stop().animate({"left":-at1_position+"%"},500);

			//클릭한 거 색깔 바꾸기
			$(this).css("background","#224289").css("color","white");
			$(".at1_left_btn").css("background","white").css("color","#224289");
			$(".at1_slide_btn li").css("background","white");
			$(".at1_slide_btn li:eq("+no+")").css("background","#224289");
		}else{
			alert("더이상 그림이 없습니다.");
		}
	});
	
	//왼쪽 화살표 클릭시
	$(".at1_left_btn").on("click",function(){ 
		if(at1_count>0){
			at1_position=100;
			at1_count--;

			no=at1_count;
			at1_position = at1_position*at1_count;
			$(".at1_slideImg").stop().animate({"left":-at1_position+"%"},500);

			//클릭한 거 색깔 바꾸기
			$(this).css("background","#224289").css("color","white");
			$(".at1_right_btn").css("background","white").css("color","#224289");
			$(".at1_slide_btn li").css("background","white"); 
			$(".at1_slide_btn li:eq("+no+")").css("background","#224289");
		}else{
			alert("더이상 그림이 없습니다.");
		}
	});

	//at1_cont1 흔들거리는 이미지 2개 채우기
	size = $(".at1_cont1_img").length;
	for(i=0;i<size;i++){
		$(".at1_cont1_img:eq("+i+")").css("background","url(img/main/img"+i+".png) no-repeat center center")
		.css("backgroundSize","contain");
	};

    //at1_cont2 박스3개 이미지 채우기
	size = $(".cont2_box").length;
	$(".cont2_box:eq(0)").css("background","url(img/main/img2.webp) no-repeat")
		.css("backgroundSize","cover");
	for(i=1;i<size;i++){
		$(".cont2_box:eq("+i+")").css("background","url(img/main/img"+(i+2)+".jpg) no-repeat")
		.css("backgroundSize","cover");
	};
	
	//at1 공지사항 데이터 넣기
	for(i=0; i<at1_notice_textA.at1_notice.length;i++){
		$(".at1_notice_text li:eq("+i+")").html(at1_notice_textA.at1_notice[i]);
	};
    /*============================아티클 클릭 연결====================================== */
	//메뉴 연결

	//메뉴버튼
	$(".menu_open").on("click", function(){
		$("nav").fadeIn(400);
	});
	
	//메뉴의 닫기버튼
	$(".menu_close").on("click", function(){
		$("nav").fadeOut(300);
	});
	
	//메뉴의 해당 항목 눌렀을때
	$(".menu li").on("click", function(){
		$("nav").fadeOut(300);
		no=$(this).index()+2;
		
		$(".at").hide();
		$(".at"+no).show();
	});
    
	//메뉴의 로그인, 회원가입 눌렀을때
	$(".login_join div").on("click", function(){
		$("nav").fadeOut(300);
		no=$(this).index()+6;
		$(".at").hide();
		$(".at"+no).show();
	});
	
    
    //메인에 움직이는 이미지 클릭하면 이달의 맛으로 넘어가기
	$(".monthBtn").on("click", function(){
		$(".at").hide();	$(".at3").show();
	});
    
	//각 제품에서 서브메뉴로 넘어가기
	$(".at4_img").on("click", function(){
		$(".at").hide();	$(".at8").show();
	});

     //로고 클릭하면 메인으로 이동
	$(".logo").on("click", function(){
		$("nav").fadeOut(300);
		$(".at").hide();
		$(".at1").show();
	});
    

	//스토어 아이콘 클릭
	$(".storeBtn").on("click", function(){
		$(".at").hide();	$(".at9").show();
	});

    //슬라이드 밑에 컨텐츠2 시작
    $(".cont2_box1").on("click", function(){
		$(".at").hide();	$(".at2").show();
	});
	
    $(".cont2_box2").on("click", function(){
		$(".at").hide();	$(".at4").show();
	});
    
    $(".cont2_box3").on("click", function(){
		$(".at").hide();	$(".at5").show();
	});
    
	//서브메뉴화면에서 메뉴로 이동
	$(".at8_btn").on("click", function(){
		$("html, body").animate({"scrollTop":0},600);
		$(".at").hide();	$(".at4").show();
		$(".at8_tree_sub").slideUp(); //서브메뉴는 모두 안보이게
		//슬라이드 맨 처음 자리로 되돌리기
		$(".at8_slideList").css("left",0); $(".at8_TextList").css("left",0);
		$(".at8_slideBtn li:gt(0)").css("background","white").css("border","3px solid #224289");
		$(".at8_slideBtn li:eq(0)").css("background","#224289");
	});
    
	/*--------------article3-------------------*/
	// 동그라미 그림 4개
	for(i=0; i<4; i++){
		$(".at3_img li").eq(i).css("background","url(img/monthflavor/icon"+(i+1)+".png)")
		.css("backgroundSize","contain");
		$(".at3_cont3 ul li").eq(i).css("background","url(img/monthflavor/img"+i+".jpg) no-repeat center center")
	.css("backgroundSize","contain");
	};
	
	$(".at3_click_space li").click(function(){
		no=$(".at3_click_space li").index(this);
		$(".at3_img li").eq(no).css("opacity","1");
	})

	$(".at3_cont3 ul li").click(function(){
		$(".at3_cont3 ul li").css("transform","scale(1)");
		$(this).css({"transform":"scale(1.1)","transition":"all 0.5s"});
	});
	

	/*--------------article4-------------------*/
	//상단 슬라이드 이미지 넣기
	size = $(".at4_slideImg").length;
	for(i=0; i<size; i++){
		$(".at4_slideImg").eq(i).css("background","url(img/menu/icecream/img"+i+".png)")
			.css("backgroundSize","cover");
	};

	size = $(".at4_slideText").length;
	for(i=0; i<size; i++){
		$(".at4_slideText").eq(i).html(at4_slideTextA[i]);
	};

	//아이스크림 텍스트
	size = $(".at4_icecream_text1").length;
	for(i=0; i<size; i++){
		$(".at4_icecream_text1").eq(i).html(at4_icecream_text1A[i]);
		$(".at4_icecream_text2").eq(i).html(at4_icecream_text2A[i]);
	}; 


	/*--------------article5-------------------*/
	//이벤트 탭메뉴
	let tabBtn = $(".at5_tabBtn>li");
	let tabCont = $(".at5_tabCont>ul");

	tabCont.hide().eq(0).show();
	tabBtn.eq(0).css("background","#f2f2f2");
	tabBtn.click(function(e){
		e.preventDefault;
		let target = $(this);
		index = target.index();
		target.removeClass();
		tabBtn.addClass("active");

		tabCont.css("display","none");
		tabCont.eq(index).css("display","block");
		tabBtn.css("background","white");
		tabBtn.eq(index).css("background","#f2f2f2");
		
		// 컨텐츠 컨버스 사이즈 맞추기
		if(index==0){$(".at5_tabCont").css("height","900px");}
		else if(index==1){$(".at5_tabCont").css("height","600px");}
		else if(index==2){$(".at5_tabCont").css("height","300px");}


	});
	

	//이미지 넣기
	size=$(".at5_tabCont_img").length;
	// console.log(size);
	for(i=0; i<size; i++){
		$(".at5_tabCont_img").eq(i).css("background","url(img/event/img"+i+".jpg) center center")
			.css("backgroundSize","cover");
	};
	

	//각 이벤트 게시물 클릭시, 유의사항 안내 박스 나옴
	$(".at5_tabCont ul li").click(function(){
		no = $(".at5_tabCont ul li").index(this);
		$(".at5_tabCont ul li .afterBox").css("left","-100%");
		$(".at5_tabCont ul li .afterBox").eq(no).animate({"left":"0"},500);
	});

	/*--------------article6-로그인------------------*/
	//아이디, 비밀번호 찾기 클릭시
	$(".findBtn").click(function(){
		alert("죄송합니다. 이 앱에서는 불가합니다.")
	});

	// 회원가입 화면으로 이동
	$(".joinBtn").click(function(){
		$(".at").hide();	$(".at7").show();
	});

	//로그인버튼 클릭시,
	$(".loginBtn").click(function(){
		return checkValue();
	})

	/*--------------article7-------------------*/
	//인증번호 전송
	$("#sendBtn").click(function(){
		alert("인증번호 : WXQ89s1");
	});
	
	if(!email){	alert("이메일을 입력하세요.");	return false;	}

	//중복확인 버튼
	$("#idcheck").click(function(){
		email = $("#email").val();
		if(!email){
			alert("이메일을 입력하세요!");
		}else{
			email_check =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
			if(!email_check.test(email)){  
				alert("이메일을 형식에 맞게 입력해주세요."); 
			}else{
				alert(email+"은 사용가능한 ID 입니다.");
			}
		}
	});

	agreefunc();
	// 회원가입 완료 버튼
	$(".at7_joinBtn").click(function(){
		return checkValue2();
	});
	/*--------------article8-------------------*/
	$(".at4_img").click(function(){
		no=$(".at4_img").index(this); //0 ~ 9 = 10개
		size = $(".at8_slideImg").length; //3개

		insert(no); //데이터 값 넣기 함수
		for(i=0; i<size; i++){
			//슬라이드, 이미지넣기
			size = $(".at8_slideImg").length;
			for(i=0; i<size; i++){
				$(".at8_slideImg:eq("+i+")").css("background","url(img/submenu/img"+no+"-"+i+
				".png) no-repeat center center").css("backgroundSize","70% 70%");
			}
		}
	});

	

	//트리구조
    $(".at8_tree_sub").hide(); //서브메뉴 안보이게하기
	
	$(".at8_tree_title").on("click", function(){ //타이틀을 눌렀을 때
		$(".at8_tree_sub").slideUp(); //서브메뉴는 모두 안보이게
		
		if($(this).next().css("display")=="none"){ //클릭한 타이틀의 서브메뉴가 안보이면
			$(this).next().slideDown(); //슬라이드다운
		}else{
			$(this).next().slideUp(); //서브메뉴가 보이면 슬라이드업
		}
	});
    
	

	//라디오 버튼으로 이미지넘기기
	$(".at8_slideBtn li:eq(0)").css("background","#224289");
	$(".at8_slideBtn li").on("click",function(){
		at8_position=100; //슬라이드 한 칸 너비
		no=$(this).index(); //클릭한 라디오 버튼 인덱스
		at8_position = at8_position*no;

		$(".at8_slideList").stop().animate({"left":-at8_position+"%"},500);
		$(".at8_TextList").stop().animate({"left":-at8_position+"%"},500);

		//클릭한 거 색깔 바꾸기
		$(".at8_slideBtn li").css("background","white").css("border","3px solid #224289");
		$(this).css("background","#224289");
	})
	
    
	/*--------------article9-------------------*/
	for(i=0; i<5; i++){
		$(".store_name").eq(i).html(store_nameA[i]);
		$(".store_addr").eq(i).html(store_addrA[i]);
		$(".store_tell").eq(i).html(store_tellA[i]);
		$(".store_time").eq(i).html(store_timeA[0]);
	}
	
	//지도 트리구조로 열림
	$(".at9_store").hide(); //서브메뉴 안보이게하기
	$(".at9_store_info").on("click", function(){ //타이틀을 눌렀을 때
		no = $(".at9_store_info").index(this);
		$(".at9_store").slideUp(); //서브메뉴는 모두 안보이게
		if($(this).next().css("display")=="none"){ //클릭한 타이틀의 서브메뉴가 안보이면
			$(this).next().slideDown(); //슬라이드다운
		}else{
			$(this).next().slideUp(); //서브메뉴가 보이면 슬라이드업
		}

		$(".store_icon").css("color","#ccc");
		$(".store_icon").eq(no).css("color","#fe7c98");
		//this = 클릭한 타이틀 / next = 다음에 나오는거
	});
	
	/*--------------top버튼-------------------*/
	$(".topBtn").click(function(){
		$("html, body").animate({"scrollTop":0},500);
	})
	
})//제이쿼리 끝


