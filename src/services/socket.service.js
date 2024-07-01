import { io } from 'socket.io-client';
import { config } from '../config/config';

const SOCKET_URL = config.socketUrl; // Replace with your server URL

export const socket = io(SOCKET_URL, {
  // transports: ['websocket'], // Use only WebSocket transport to avoid polling
});


