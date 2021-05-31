function doSomething(){ //doSomething이라는 함수 선언
    let a = document.getElementById('inputA').value; // id가 inputA인 변수를 변수 a에 저장
    let b = document.getElementById('inputB').value; //id가 inputB인 변수를 변수 b에 저장
    document.getElementById("valueA").innerHTML = a;
    document.getElementById("valueB").innerHTML = b;
    document.getElementById("valueC").innerHTML = Number(a) + Number(b); //a와 b의 값을 숫자도 바꾼 다음 더한 결과를 valueC에 저장
}
