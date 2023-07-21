function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createNodes() {
  var nodeCount = parseInt(document.getElementById("nodeCount").value);
  var texts = [];

  // 노드 생성 및 텍스트 배열 생성
  for (var i = 1; i <= nodeCount; i++) {
    texts.push(i + ". 노드 " );
  }

  // 기존 노드 삭제
  var targetDiv = document.getElementById("targetDiv");
  targetDiv.innerHTML = '';

  // 새로운 div 노드 생성
  var newDiv = document.createElement("div");

  // 생성한 노드들을 담을 빈 배열
  var nodes = [];

  // 노드를 생성하고 텍스트를 추가하는 함수
  function createNodeWithText(text, color) {
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode(text);
    newParagraph.appendChild(textNode);

    // 색상 스타일을 추가합니다.
    newParagraph.style.color = color;

    // 생성한 노드들을 배열에 추가
    nodes.push(newParagraph);
  }

  // 여러 개의 <p> 요소 생성 및 텍스트 추가
  for (var i = 0; i < texts.length; i++) {
    // 색상을 랜덤하게 생성
    var randomColor = getRandomColor();
    createNodeWithText(texts[i], randomColor);
  }

  // 생성한 노드들을 div 요소의 자식으로 추가
  for (var i = 0; i < nodes.length; i++) {
    newDiv.appendChild(nodes[i]);
  }

  // 스타일을 추가할 수도 있습니다.
  newDiv.style.backgroundColor = "black";
  newDiv.style.padding = "10px";
  newDiv.style.marginTop = "20px";

  // 생성한 div 노드를 body 요소의 자식으로 추가
  targetDiv.appendChild(newDiv);
}