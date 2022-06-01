const WebSocketServer = require("ws");

const wss = new WebSocketServer.Server({ port: 3001 });

wss.on("connection", (ws: any) => {
  let receivedMessage = "";
  console.log("new client connected");

  // sending message
  ws.on("message", (data: any) => {
    receivedMessage = data;
    console.log(`Client has sent us: ${data}`);
    ws.send(JSON.stringify({ message: String(data) }));
  });

  // handling client connection error
  ws.onerror = function () {
    console.log("Some Error occurred");
  };
});
