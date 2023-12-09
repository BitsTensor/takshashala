#include <iostream>
#include <cstring>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

#define SERVER_PORT 8080
#define SERVER_IP "127.0.0.1" // INADDR_ANY

int main() {
    int serverSocket, clientSocket;
    struct sockaddr_in serverAddress, clientAddress;
    char buffer[1024];

    // Create socket
    serverSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (serverSocket == -1) {
        std::cerr << "Error creating socket." << std::endl;
        return 1;
    }

    // Set up server address
    serverAddress.sin_family = AF_INET;
    //serverAddress.sin_addr.s_addr = inet_addr(SERVER_IP);
    if (inet_pton(AF_INET, SERVER_IP, &(serverAddress.sin_addr)) <= 0) {
    	std::cerr << "Invalid address or address not supported." << std::endl;
    	return 1;
	}
    serverAddress.sin_port = htons(SERVER_PORT);

    // Bind the socket to the specified address and port
    if (bind(serverSocket, (struct sockaddr *)&serverAddress, sizeof(serverAddress)) < 0) {
        std::cerr << "Error binding to port " << SERVER_PORT << std::endl;
        return 1;
    }

    // Start listening for incoming connections
    listen(serverSocket, 1);
    std::cout << "Server listening on port " << SERVER_PORT << std::endl;

    socklen_t clientAddressSize = sizeof(clientAddress);

    // Accept connection from client
    clientSocket = accept(serverSocket, (struct sockaddr *)&clientAddress, &clientAddressSize);
    if (clientSocket < 0) {
        std::cerr << "Error accepting client connection." << std::endl;
        return 1;
    }

    // Receive data from client
    memset(buffer, 0, sizeof(buffer));
    if (recv(clientSocket, buffer, sizeof(buffer), 0) < 0) {
        std::cerr << "Error receiving data from client." << std::endl;
        return 1;
    }

    std::cout << "Received message from client: " << buffer << std::endl;

    // Send response to client
    const char *response = "Hello from server!";
    if (send(clientSocket, response, strlen(response), 0) < 0) {
        std::cerr << "Error sending response to client." << std::endl;
        return 1;
    }

    // Close sockets
    close(clientSocket);
    close(serverSocket);
    return 0;
}
/*
Both inet_addr and inet_pton functions are used for converting IP addresses from string format to the appropriate network representation.

inet_addr function is used to convert IPv4 addresses from string format to a 32-bit binary format (in_addr_t). It takes a string representing an IPv4 address as input and returns the binary representation. However, inet_addr has some limitations and is considered deprecated. It returns INADDR_NONE (-1) in case of an error, which makes it difficult to distinguish between a valid IP address and an error condition.

On the other hand, inet_pton function is a more modern and versatile function. It can handle both IPv4 and IPv6 addresses. It converts the IP address from string format to a binary format suitable for the specified address family (AF_INET for IPv4 or AF_INET6 for IPv6). It returns 1 on success, 0 if the input is not a valid IP address, and -1 in case of an error.

Therefore, it is generally recommended to use inet_pton over inet_addr for better portability and support for both IPv4 and IPv6 addresses.
*/
