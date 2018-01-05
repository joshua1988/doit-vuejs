var app = new Vue({
  el: '#app',
  data: {
    message : 'Hello Vue.js',
    // 할 일 #1
    // 새로운 데이터 속성을 1개 추가하고, 머스타쉬 {{ }} 데이터 바인딩을 이용하여 화면에 표시해보세요.

    uid: '10',
    // 할 일 #2
    // uid를 변경하고 해당 uid의 변경 여부를 크롬 개발자 도구의 '화면 요소 검사 기능'으로 확인해보세요. p 태그의 id 값을 검사.

    flag: true
    // 할 일 #4
    // 위 flag 값을 false로 변경했을 때 화면에 어떤 영향을 주는지 확인해보세요.
  },
  methods: {
    // ES6 문법
    clickBtn() {
      console.log("hi");
    },
    // ES5 문법 - 위 ES6 문법과 동일한 코드
    // clickBtn: function() {
    //   console.log("hi");
    // }

    // 할 일 #3
    // eventMethod를 하나 추가하고 index.html의 #3 영역에 해당 이벤트를 실행하는 버튼을 추가하세요.
  }
});
