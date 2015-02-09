function s (f) {
  return f
  .toString()
  .split('\n')
  .slice(1, -1)
  .join('\n')
}
function goTo (hash) {
  location.assign('#' + hash)
  location.reload()
}
views = {
  input: s(function () {/**
    <div class=abs
      style="
        font-size: 8vw;
        top: 30%;
        left: 38%;
      "
      id=count>4</div>
    <div class="abs ctrl"
      style="
        top: 68%;
        left: 30%;
      "
      onClick="(function () {
        document.getElementById('count').innerHTML
          = ++ document.getElementById('count').innerHTML
      })()"></div>
    <div class="abs ctrl"
      style="
      top: 68%;
      left: 57%;
      "
      onClick="(function () {
      document.getElementById('count').innerHTML > 0
        ? (function () {
          document.getElementById('count').innerHTML
          = -- document.getElementById('count').innerHTML
        })() : 0
      })()"></div>
    <div class="abs ctrl"
      style="
        top: 83%;
        left: 35%;
        width: 30%;
      "
      onClick="goTo('results1:'
        + document.getElementById('count').innerHTML
      )"></div>
    <div class="abs ctrl"
      style="
      top: 8%;
      left: 5%;
      "
      onClick="goTo(hash + ':menu')"></div>
    <div class="abs ctrl"
      style="
      top: 8%;
      left: 80%;
      "
      onClick="goTo('help1')"></div>
  **/}),
  results1: s(function () {/**
    <div class="abs ctrl"
      style="
        top: 8%;
        left: 5%;
      "
      onClick="goTo('input')"></div>
    <div class="abs ctrl"
      style="
        top: 8%;
        left: 80%;
      "
      onClick="goTo('help1')"></div>
    <div class=abs id=count
      style="
      top: 68%;
      left: 58.6%;
      font-size: 1.5vw;
      font-weight: bold;
      "></div>
    <div class="abs ctrl"
      style="
      top: 94%;
      left: 42%;
      width: 5%;
      height: 5%;
      "
      onClick="goTo('results1')"></div>
    <div class="abs ctrl"
      style="
      top: 94%;
      left: 48%;
      width: 5%;
      height: 5%;
      "
      onClick="goTo('results2')"></div>
    <div class="abs ctrl"
      style="
      top: 94%;
      left: 53%;
      width: 5%;
      height: 5%;
      "
      onClick="goTo('results3')"></div>
  **/}),
  results4: s(function () {/**
    <div class="abs ctrl"
      style="
      top: 8%;
      left: 5%;
      "
      onClick="goTo('input')"></div>
    <div class="abs ctrl"
      style="
      top: 8%;
      left: 80%;
      "
      onClick="goTo('help1')"></div>
  **/}),
  help1: s(function () {/**
    <div class="abs ctrl"
      style="
      width: 100%;
      height: 100%;
      "
      onClick="goTo(
        (hash.slice(-1) < 4)
          ? ('help' + (+hash.slice(-1) + 1))
          : 'input'
      )"></div>
  **/}),
}

menu = s(function () {/**
  <div class=abs id=menu
  style="
    top: 10%;
    left: 15%;
    width: 30%;
    background-color: white;
    border: 1px solid black;
    padding: 3%;
  "
  onClick="goTo('results4')">
    <a href="" >Results</a>
  </div>
**/})

views.help4 = views.help3 = views.help2 = views.help1

views.results3
  = views.results2
  = views.results1
views.results1 += s(function () {/**
  <div class="abs ctrl"
  style="
  top: 83%;
  left: 25%;
  width: 50%;
  "
  onClick="goTo('input')"></div>
**/})
