"use client";
import { apiUrl } from "@/config";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import io from "socket.io-client";
const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const on = useCallback(
    (event, callback) => {
      if (socket) socket.on(event, callback);
    },
    [socket]
  );
  const off = useCallback(
    (event, callback) => {
      if (socket) socket.off(event, callback);
    },
    [socket]
  );
  const emit = useCallback(
    (event, callback) => {
      if (socket) socket.emit(event, callback);
    },
    [socket]
  );
  useEffect(() => {
    const sock = io(`${apiUrl}`, {
      transports: ["websocket"],
      secure: true,
    });
    setSocket(sock);
  }, []);

  const contextValue = {
    on,
    off,
    emit,
    socket,
  };

  // useEffect(() => {
  //   socket.on("newChat", (newChat) => {
  //     setChats((prevChats) => [newChat, ...prevChats]);
  //   });
  //   return () => sock.disconnect();
  // }, []);

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};
export const useSocket = () => useContext(SocketContext);

export default SocketProvider;
