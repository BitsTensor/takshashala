#include<iostream>							// (input / output file) source: https://en.cppreference.com/w/cpp/header/iostream #or https://cplusplus.com/reference/iostream/
#include"server"


const int PORT=8080;
const int BUFFER_SIZE=1024;

int main() {
	
    	Server server;// build server 
    	server.startListenAt();// start server 
    	server.waitTillCommunicationEnds();// make join thread
    	//server.closeClientSocket();
    	server.closeServiceSocket();
    	return 0;
}

