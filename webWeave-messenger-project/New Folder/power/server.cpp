#include"server"							// include header file 


// define methods for `CustomSocket` class -----------------------------
CustomSocket::CustomSocket(){						// define structure build method (constructor) for do for do nothing
	// used only for declaration of socket by server class
}


CustomSocket::CustomSocket(						// define structure build method (constructor) for server only 
	const int type,							// type of socket - 0 : client and 1 : server 
	const std::string& ip,						// server / client IP address 
	const int port,							// server / client port number 
	int infoLevel							// server / client info level - 0 : no-info (not error), 1 : only error, 2 : all-info
	):type(type),infoLevel(infoLevel){				// set socket type and info level 
	if (type!=1) throw std::runtime_error("`type` must be `1` for server socket. Else provide server socket attribute for `type 0`.\n");// check type must be one for server socket 
	customSocket=socket(AF_INET,SOCK_STREAM,0);			// try to build socket object 
	if (customSocket==-1){						// if failed to build socket
		state=-1;						// make state to failed (at level 1)
		throw std::runtime_error("Error: Failed to create socket !\n");// make throw error as failed to build socket
	}								// end of if 
	address.sin_family=AF_INET; 					// define family address type, the type of addresses that your socket can communicate with
	//address.sin_addr.s_addr=inet_addr(ip.c_str());			// add server IP address or address.sin_addr.s_addr=inet_addr(ip); if ip address is character array. (inet_addr not recommended)
	if (inet_pton(AF_INET,ip.c_str(),&(address.sin_addr))<=0) throw std::runtime_error("Invalid address or address not supported -> "+ip+"\n");// setup server IP address, `inet_pton` function is a more modern and versatile function. It can handle both IPv4 and IPv6 addresses. It converts the IP address from string format to a binary format suitable for the specified address family (`AF_INET` for IPv4 or `AF_INET6` for IPv6). It returns 1 on success, 0 if the input is not a valid IP address, and -1 in case of an error.
	address.sin_port=htons(port);					// add server port number, htons : "host to network short." It is used to convert a 16-bit unsigned short integer from host byte order to network byte order. Relies on the <arpa/inet.h> header file.
	if (bind(customSocket,reinterpret_cast<sockaddr*>(&address),sizeof(address))==-1){// try to connect with server setuped address
		state=-2;					 	// make state to failed (at level 2)
		throw std::runtime_error("Failed to bind at "+ip+":"+std::to_string(port)+"\n");// print error info if info level if level is greater than 0 
	}								// end of if 
	state=1;							// setup state to 1 (server setuped, all good to go)
}									// end of build method (constructor) for server only 
		

CustomSocket::CustomSocket(						// define structure build method (constructor) for client only 
	CustomSocket& serviceSocket,					// server socket object 
	const int type,							// type of socket - 0 : client and 1 : server 
	const std::string& ip,						// server / client IP address 
	const int port,							// server / client port number 
	int infoLevel							// server / client info level - 0 : no-info (not error), 1 : only error, 2 : all-info
	):type(type),infoLevel(infoLevel){				// set socket type and info level 
	if (type!=0) throw std::runtime_error("`type` must be `0` for client socket.");// check type must be zero for client socket
	//address.sin_family=AF_INET; 					// define family address type, the type of addresses that your socket can communicate with
	//address.sin_addr.s_addr=inet_addr(ip.c_str());			// add server IP address 
	//address.sin_port=htons(port);					// add server port number, htons : "host to network short." It is used to convert a 16-bit unsigned short integer from host byte order to network byte order. Relies on the <arpa/inet.h> header file.
	socklen_t addressLength=sizeof(address);			// find client address length 	
	customSocket=accept(serviceSocket.customSocket,reinterpret_cast<sockaddr*>(&address),&addressLength);// accept (connect) to client socket 
	if (customSocket==-1){						// if failed to connect to client socket 
		state=-1;						// set client state to -1 (failed to connect) 
        	throw std::runtime_error("Failed to accept connection from client at "+ip+":"+std::to_string(port)+"\n");// print error info as failed to accept
        }								// end of if 
        state=1;							// set client status to one (connected)
 }									// end of build method (constructor) for client only 


void CustomSocket::coreListener(					// define core listener method 
	const int BUFFER_SIZE						// connection buffer size
	){
	if (state<1) throw std::runtime_error("Socket not build properly! Error at listening");// check type must be zero for client socket 
	while (true){							// make run loop listen infinitly 
		char buffer[BUFFER_SIZE];				// define buffer character array of given size
        	ssize_t bytesRead=recv(customSocket,buffer,BUFFER_SIZE,0);// get size of message to read / received 
    		if (bytesRead==-1){					// if failed to read message 
        		if (infoLevel>0) std::cerr<<"Error: Failed to receive message from client at "<<inet_ntoa(address.sin_addr)<<":"<<ntohs(address.sin_port)<<std::endl;// print error info 
        		//clientState=-2;				// set client state to -2 (failed to read message) 
        		//return false;					// return false, failed to read message from client 
        		break;						// make break loop, end receiving 
    		}							// end of if 
    		else if (bytesRead==0){					// if sending socket is closed 
    			std::cerr<<"Error: sending socket is closed! Closing receiving end ..."<<std::endl;// print error info that socket closed 
    			break;						// end loop, end receiving
    		}							// end of if statement 
    		std::string receivedMessage(buffer,bytesRead);		// store message readed as string 
    		if (receivedMessage.find(CLOSE_SERVER_COMMAND)!=std::string::npos){// check ending string is present or not 
    			size_t position=receivedMessage.find(CLOSE_SERVER_COMMAND);// get position of ending message 
    			while (position!=std::string::npos){		// clean string - remove server close command 
    				receivedMessage.replace(position,std::strlen(CLOSE_SERVER_COMMAND),"");// replace server closing command with null string
    				position=receivedMessage.find(CLOSE_SERVER_COMMAND,position+0);// "".length()=0, update position. 
    			}						// end of while loop (for cleaning string)
    			if (!receivedMessage.empty()) std::cout<<"Message received from client: "<<receivedMessage<<std::endl;// if string is not empty, make print readed message from client
    			break;// end loop, end receiving
    		}
    		if (!receivedMessage.empty()) std::cout<<"Message received from client: "<<receivedMessage<<std::endl;// if string is not empty, make print readed message from client
    	}								// end of while loop 
} 									// end of core listener method 


void CustomSocket::closeSocket(){					// method to close socket 
	if ((state==0)&&(infoLevel>0)) std::cerr<<"Socket already closed at "<<inet_ntoa(address.sin_addr)<<":"<<ntohs(address.sin_port)<<std::endl;// make print info as server not connected to client 
	else if ((state<0)&&(infoLevel>0)) std::cerr<<"Can't closed un-build / failed socket."<<std::endl;// make print info as server constructor failed to build socket connection. 
	else if (state>0){						// make close socket if opened 
		close(customSocket);					// make close server / client socket
		if (infoLevel>1) std::cout<<"Socket successfully closed at "<<inet_ntoa(address.sin_addr)<<":"<<ntohs(address.sin_port)<<std::endl;// make print info that server closed 
		state=0;						// change state to zero 
	}								// end of else 
}									// end of `close` method 


// define methods for `Server` class -----------------------------------		
Server::Server(								// define constructor method 
	const std::string& serviceIP,					// server IP address 
	const int servicePort,						// server port number 
	int infoLevel							// info level - 0 : no-info (not error), 1 : only error, 2 : all-info
	):serviceSocket(1,serviceIP,servicePort,infoLevel){		// define and setup server socket
}									// server (constructor) method ends here 


bool Server::startListenAt(						// define connection method (Listening to client)
	const std::string& clientIP,					// IP address of client
	const int clientPort,						// port number of client
	const int BUFFER_SIZE,						// connection buffer size
	int infoLevel							// info level - 0 : no-info (not error), 1 : only error, 2 : all-info
	){
	if (listen(serviceSocket.customSocket,1)==1){			// try to listen at given server socket, if failed 
        	std::cerr<<"Failed to listen by server. Server side failure!"<< std::endl;// print error info 
        	return false;						// return false, as server failed to listen 
        }								// end of if 
        std::cout<<"Server listening at "<<inet_ntoa(serviceSocket.address.sin_addr)<<":"<<ntohs(serviceSocket.address.sin_port)<<std::endl;// make print info. The `inet_ntoa` function is used to convert an IP address from network byte order (in struct in_addr) to a string representation in the standard dot notation. The `ntohs` function is used to convert a 16-bit integer value from network byte order (big-endian) to host byte order. It stands for "network to host short." 
	clientSocket=CustomSocket(serviceSocket,0,clientIP,clientPort,infoLevel);// make / build client Socket (no variable must be constant in structure)
	if (clientSocket.state>0){					// if client is connected to server socket 
		clientSocketThread=std::thread(&CustomSocket::coreListener,clientSocket,BUFFER_SIZE);// make threaded call for core listener
		//clientSocketThread.join();				// wait till thread ends 
    		return true;						// make return true if message readed 
    	}else return false;						// else return false 
}									// end of `startServerAt` method 


void Server::waitTillCommunicationEnds(){				// method to make server wait till all client socket ends 
	if (clientSocketThread.joinable()){				// true if the thread object identifies an active thread of execution, false otherwise
		clientSocketThread.join();				// make wait till thread ends 
	}								// end of if 
}									// end of `waitTillCommunicationEnds` method 


void Server::closeServiceSocket(){					// method to close server (close server socket)
	clientSocket.closeSocket();					// make disconnect client socket connected to server 
	serviceSocket.closeSocket();					// make close server socket 
}									// end of `closeServiceSocket` method 


void Server::disconnectClient(){					// method to close client socket 
	clientSocket.closeSocket();					// make close one by one all client sockets 
}									// end of `closeClientSocket` method 
