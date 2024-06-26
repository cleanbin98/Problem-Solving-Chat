//script.js는 컨트롤러 역할을 한다.

const socket = io('http://localhost:3000/chat'); //클라이언트 영역에서 chat gateway에 접속하기 위한 설정
const nickname = prompt('닉네임을 입력해주세요.');
    
    socket.on('connect', () => {      
      console.log('connected');
    });

    function sendMessage() {
    const message = $('#message').val();
    $('#chat').append(`<div>나 : ${message}</div>`);
    socket.emit('message', {message, nickname});
    }

    socket.on('message', (message) => {
      $('#chat').append(`<div>${message}</div>`);
    });