//chat.gateway는 서비스 역할을 함.

import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chat' }) //네임스페이스로 chat이라는 이름의 웹 소켓 서버 게이트웨이를 설정
export class ChatGateway {
  @WebSocketServer() server: Server; // 생성된 게이트웨이를 접근하고 인스턴스 위한 설정.

  @SubscribeMessage('message') // 클라이언트가 전송한 message를 서버(script.js)에서 처리할 수 있도록 설정
  handleMessage(socket: Socket, data: any): void {
    const { message, nickname } = data;
    socket.broadcast.emit('message', `${nickname}: ${message}`); //접속한 클라이언트들에게 메세지 전송
  }
}