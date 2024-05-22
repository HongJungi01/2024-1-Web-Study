a. Javascript가 DOM에 접근하고 적용하는 방법  

    Javascript가 DOM에 접근하고 적용하는 방법은 메서드를 통해 특정한 태그에 접근한다.  
    예를 들어 html에서 <button>이라는 노드의 id를 <button id="buttonid">로 지정하면  
    Javascript에서는 document.getElementById("buttonid")라는 메서드를 활용해 button에 접근하고 활용할 수 있게 된다.  
    메서드의 종류로는  
    getElementById  
    querySelector  
    getElementsByClassName  
    getElementsByTagName  
    querySelectorAll  
    이 있다.
  
    예시로  
    html에서  
    <div>  
        <h1 class="name">GDSC Hongik!</h1>  
    </div>  
    로 작성되었을 때 자바스크립트에서 h1을 불러오기 위해서는  
    const name = document.getElementsByClassName("name"")  
    을 통해 불러오고 사용할 수 있게 된다.  


b. 브라우저를 이루는 컴포넌트 중 JavaScript Engine은 무엇이고, 어떤 역할을 할까?  
   
    자바스크립트 코드를 실행하거나 해석(Interpreter)을 하는 해석기이며, 웹 브라우저에서 자바스크립트 코드를 동작할 수 있게 만들어준다.  

c. inline CSS가 항상 좋은 것일까? 아니라면 그 이유는 무엇일까?  
  
    하나의 html문서 안에서 필요한 스크립트를 이용할 수 있다는데에서는 장점이라고 볼 수 있다.  
    하지만 웹은 유지보수와 관리가 중요하다는 점에서 inline CSS는 불리하게 작용할 수 있다.  
    각각의 스크립트와 세팅값들을 별도의 정리된 공간에서 관리하는 것이 inline CSS에서 하나하나 찾으면서 작업하는 것보다 수월하기 때문에 inline CSS는 규모가 큰 웹에서는 활용하는데에 어려움이 크다.  