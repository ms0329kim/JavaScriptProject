function sendRequest() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            document.getElementById("text").innerHTML = httpRequest.responseText;
        }
    };

    // GET 방식
    httpRequest.open("GET", "url", true);
    httpRequest.send();

    // POST 방식의 요청은 데이터를 Http 헤더에 포함시켜 전송함.
    httpRequest.open("POST", "/examples/media/request_ajax.php", true);
    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpRequest.send("city=Seoul&zipcode=06141");

    // async : false > 서버에 동기식 요청

}

// 서버의 프로퍼티 확인
// 1. readyState 프로퍼티
//  - XMLHttpRequest 객체의 현재 상태
//   1) UNSENT (숫자 0) : XMLHttpRequest 객체가 생성됨.
//   2) OPENED (숫자 1) : open() 메소드가 성공적으로 실행됨.
//   3) HEADERS_RECEIVED (숫자 2) : 모든 요청에 대한 응답이 도착함.
//   4) LOADING (숫자 3) : 요청한 데이터를 처리 중임.
//   5) DONE (숫자 4) : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨.

// 2. status 프로퍼티
//  - 서버의 문서 상태
//   > 200 : 서버에 문서가 존재함
//   > 404 : 서버에 문서가 존재하지 않음

// 3. onreadystatechange 프로퍼티
//  - 서버에서 응답이 도착할 때까지 readyState 프로퍼티 값의 변화에 따라 총 5번 호출됩니다.
//  - 이 프로퍼티를 이용하면 서버에 요청한 데이터가 존재하고,
//    서버로부터 응답이 도착하는 순간을 특정할 수 있습니다.
function checkHttpResponse() {
    var httpRequest = new XMLHttpRequest();
    var currentState = "";
    httpRequest.onreadystatechange = function() {
        switch (httpRequest.readyState) {
            case XMLHttpRequest.UNSENT:
                currentState += "XMLHttpRequest 객체의 현재 상태는 UNSET 입니다.<br>";
                break;
            case XMLHttpRequest.OPENED:
                currentState += "XMLHttpRequest 객체의 현재 상태는 OPENED 입니다.<br>";
                break;
            case XMLHttpRequest.HEADERS_RECEIVED:
                currentState += "XMLHttpRequest 객체의 현재 상태는 HEADERS_RECEIVED 입니다.<br>";
                break;
            case XMLHttpRequest.LOADING:
                currentState += "XMLHttpRequest 객체의 현재 상태는 LOADING 입니다.<br>";
                break;
            case XMLHttpRequest.DONE:
                currentState += "XMLHttpRequest 객체의 현재 상태는 DONE 입니다.<br>";
                break;
        }
        document.getElementById("status").innerHTML = currentState;

        if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200 ) {
            document.getElementById("header").innerHTML = httpRequest.getAllResponseHeaders();
            document.getElementById("user").innerHTML =
                "testheader: " + httpRequest.getResponseHeader("testheader");

            // HTTP 응답 헤더
            // 1. getAllResponseHeaders() 메소드
            // :  HTTP 응답 헤더의 모든 헤더를 문자열로 반환합니다.
            // 2. getResponseHeader() 메소드
            // :  HTTP 응답 헤더 중 인수로 전달받은 이름과 일치하는 헤더의 값을 문자열로 반환합니다.

            // Content-Type 헤더
            // 헤더 값을 직접 설정하지 않으면, HTML 문서의 MIME 타입인 "text/html"로 자동 설정

            // 서버로부터의 응답 데이터 확인
            // 1. responseText 프로퍼티
            // - 서버에 요청하여 응답으로 받은 데이터를 문자열로 반환
            // 2. responseXML 프로퍼티
            // - 서버에 요청하여 응답으로 받은 데이터를 XML DOM 객체로 반환
            document.getElementById("text").innerHTML = httpRequest.responseText;

        }
   };
    httpRequest.open("GET", "/examples/media/ajax_intro_data.txt", true);
    httpRequest.send();

    // 요청 취소
    httpRequest.abort();
}