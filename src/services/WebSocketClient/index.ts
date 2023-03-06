/*class SocketClient {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  
    constructor() {
      this.socket = io(API_BASE_URL);
    }
  
    subscribeUpdatedTable(callback: (value: any) => void) {
      this.socket.on("tableUpdated", (value) => {
        callback(value);
      });
    }
  }
  
  export default new SocketClient();*/

class WebSocketClient {}

export default new WebSocketClient()
