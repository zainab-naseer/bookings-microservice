import { WebSocketGateway, WebSocketServer, SubscribeMessage, WebSocketException } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendNotification')
  handleNotification(client: any, payload: { message: string }): void {
    this.server.emit('notification', payload);
  }
}