#include <iostream>
#include <cstring>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

#define SERVER_IP "127.0.0.1"
#define SERVER_PORT 8080
#define CLIENT_PORT 8888

int main() {
    int clientSocket;
    struct sockaddr_in serverAddress;

    // Create socket
    clientSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (clientSocket == -1) {
        std::cerr << "Error creating socket." << std::endl;
        return 1;
    }

    // Set up server address
    serverAddress.sin_family = AF_INET;
    serverAddress.sin_port = htons(SERVER_PORT);
    if (inet_pton(AF_INET, SERVER_IP, &(serverAddress.sin_addr)) <= 0) {
        std::cerr << "Invalid address or address not supported." << std::endl;
        return 1;
    }

    // Connect to the server
    if (connect(clientSocket, (struct sockaddr *)&serverAddress, sizeof(serverAddress)) < 0) {
        std::cerr << "Error connecting to the server." << std::endl;
        return 1;
    }

    // Send data to server
    const char *message = "Hello from client!";
    if (send(clientSocket, message, strlen(message), 0) < 0) {
        std::cerr << "Error sending data to server." << std::endl;
        return 1;
    }

    char buffer[1024];
    memset(buffer, 0, sizeof(buffer));

    // Receive response from server
    if (recv(clientSocket, buffer, sizeof(buffer), 0) < 0) {
        std::cerr << "Error receiving response from server." << std::endl;
        return 1;
    }

    std::cout << "Received response from server: " << buffer << std::endl;

    // Close socket
    close(clientSocket);

    return 0;
}
