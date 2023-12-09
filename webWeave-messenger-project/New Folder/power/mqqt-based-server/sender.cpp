#include <iostream>
#include <cstdlib>
#include <cstring>
#include <chrono>
#include <thread>
#include <mqtt/async_client.h>

const std::string SERVER_ADDRESS("tcp://mqtt.eclipse.org:1883");
const std::string CLIENT_ID("mqtt_sender");
const std::string TOPIC("test_topic_unknow_okay");

class mqtt_callback : public virtual mqtt::callback
{
public:
    void connection_lost(const std::string& cause) override
    {
        std::cout << "Connection lost: " << cause << std::endl;
    }

    void message_arrived(mqtt::const_message_ptr msg) override {}

    void delivery_complete(mqtt::delivery_token_ptr token) override
    {
        std::cout << "Message sent successfully" << std::endl;
    }
};

int main(int argc, char* argv[])
{
    mqtt::async_client client(SERVER_ADDRESS, CLIENT_ID);
    mqtt_callback cb;
    client.set_callback(cb);

    mqtt::connect_options connOpts;
    connOpts.set_keep_alive_interval(20);
    connOpts.set_clean_session(true);

    try
    {
        std::cout << "Connecting to the MQTT server..." << std::endl;
        client.connect(connOpts)->wait_for(std::chrono::seconds(5));

        std::cout << "Connected." << std::endl;
        std::cout << "Enter message to send (Q to quit): " << std::endl;

        while (true)
        {
            std::string message;
            std::getline(std::cin, message);

            if (message == "Q" || message == "q")
                break;

            mqtt::message_ptr pubmsg = mqtt::make_message(TOPIC, message);
            client.publish(pubmsg)->wait_for(std::chrono::seconds(5));
        }

        client.disconnect()->wait_for(std::chrono::seconds(5));
    }
    catch (const mqtt::exception& exc)
    {
        std::cerr << "Error: " << exc.what() << std::endl;
        return 1;
    }

    return 0;
}

