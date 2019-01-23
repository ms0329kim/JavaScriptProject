// 사용법 1
$.ajax ({
    type : "GET",                   // GET, POST, DELETE, PUT
    url : 'url',         // 서버측에서 가져올 페이지
    data : {"key" : "value"},       // 서버측에 전달할 parameter
    headers : {},
    contentType : "application/x-www-form-urlencoded; charset=UTF-8",
        // application/x-www-form-urlencoded; charset=UTF-8
        // multipart/form-data
        // text/plain
    timeout : 5000,                 // 응답대기시간
    dataType : 'json',              // returne된 데이터의 type
    cache : True,                   // 브라우저에 의해 요청되는 페이지를 캐시할 수 있다 (True / False)
    async : True,                   // 요청 시 동기 유무 선택 (True / False)
    beforeSend: function() {
        // ajax 요청하기전에 실행되는 함수
    },
    success : function(data) {     // 정상적으로 완료되었을 경우에 실행된다
        // 성공했을 때 호출할 콜백을 지정한다.
        // Function( PlainObject data, String textStatus, jqXHR jqXHR )
    },
    error : function(request, status, error ) {
        // 오류가 발생했을 때 호출된다.
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    },
    complete : function () {
        // 정상이든 비정상인든 실행이 완료될 경우 실행될성공했을 때 호출할 콜백을 지정한다.
    }
});

// 사용법 2
$.ajax({
    url: "/examples/media/request_ajax.php", // 클라이언트가 요청을 보낼 서버의 URL 주소
    data: {name: "홍길동"},                // HTTP 요청과 함께 서버로 보낼 데이터
    type: "GET",                             // HTTP 요청 방식(GET, POST)
    dataType: "json"                         // 서버에서 보내줄 데이터의 타입
}).done(function (json) {
    // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
    $("<h1>").text(json.title).appendTo("body");
    $("<div class=\"content\">").html(json.html).appendTo("body");
}).fail(function (xhr, status, errorThrown) {
    // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
    $("#text").html("오류가 발생했습니다.<br>")
        .append("오류명: " + errorThrown + "<br>")
        .append("상태: " + status);
}).always(function (xhr, status) {
    // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
    $("#text").html("요청이 완료되었습니다!");
});

// success = done
// error = fail
// complete : always
// 1. 성공일 경우 : success > complete > done > always
// 2. 실패일 경우 : error > complete > fail > always

//  Ajax 메소드
//  $.ajax()	비동기식 Ajax를 이용하여 HTTP 요청을 전송함.
//  $.get(URL주소[,콜백함수]);
//      전달받은 주소로 GET 방식의 HTTP 요청을 전송함.
//  $.post(URL주소[,데이터][,콜백함수]);
//      전달받은 주소로 POST 방식의 HTTP 요청을 전송함.
//  $.getScript	웹 페이지에 스크립트를 추가함.
//  $.getJSON	전달받은 주소로 GET 방식의 HTTP 요청을 전송하여, 응답으로 JSON 파일을 전송받음.
//  load()
//      서버에서 데이터를 읽은 후, 읽어 들인 HTML 코드를 선택한 요소에 배치함.
//      이때 선택자를 URL 주소와 함께 전송하면, 읽어 들인 HTML 코드 중에서 선택자와 일치하는 요소만을 배치합니다.

// JSON 사용법
// JSON.stringify()     객체를 JSON 형식의 문자열로 변환한다.
// JSON.parse()         메소드는 JSON 데이터를 가진 문자열을 객체로 변환한다.

// 참조 : https://poiemaweb.com/jquery-ajax-json