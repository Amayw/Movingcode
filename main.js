let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let heart = document.querySelector("#heart");
let string = `/* 你好，我叫小王。
*  送给你一个小心心。**/
/* 首先展示一个心尖出来*/
#heart{
   border:1px solid red;
   width:100px;
   height:100px;
   transform:rotateZ(45deg);
   background: red;
   animation: 0.5s anim infinite alternate;
}
/* 接着添加❤的两个肩膀**/
#heart::before {
  border:0.1px solid red;
  width: 99px;
  height: 99px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: red;
}
#heart::after {
  border:0.1px solid red;
  width: 99px;
  height: 99px;
  top: -50%;
  border-radius: 50%;
  background: red;
}
/* biubiubiu~~~变粉色**/
   #demo{
       color:pink;
   }
/* 最后让小心心动起来**/
@keyframes anim {
  from {
    transform: scale(1) rotateZ(45deg);
  }
  to {
    transform: scale(1.5) rotateZ(45deg);
  }

`;
let n = 0;
let temp = ``;

let step = () => {
  setTimeout(() => {
    if (n < string.length - 1) {
      //如果n不是最后一个就继续遍历
      if (string[n] === "\n") {
        //换行替换为<br>
        temp += `<br>`;
      } else if (string[n] === " ") {
        temp += `&nbsp`;
      } else {
        temp += string[n];
      }
      demo.innerHTML = temp;
      style.innerHTML = string.substring(0, n);
      window.scrollTo(0, 99999);
      demo.scrollTo(0, 99999);
      n++;
      step();
    }
  }, 20);
};
step();
