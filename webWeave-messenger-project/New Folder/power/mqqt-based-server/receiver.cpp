#include <iostream>
#include <cstdlib>
#include <cstring>
#include <mqtt/async_client.h>

const std::string SERVER_ADDRESS("tcp://mqtt.eclipse.org:1883");
const std::string CLIENT_ID("mqtt_receiver");
const std::string TOPIC("test_topic_unknow_okay");

class mqtt_callback : public virtual mqtt::callback
{
public:
    void connection_lost(const std::string& cause) override
    {
        std::cout << "Connection lost: " << cause << std::endl;
    }

    void message_arrived(mqtt::const_message_ptr msg) override
    {
        std::cout << "Message received: "
                  << msg->get_payload_str() << std::endl;
    }

    void delivery_complete(mqtt::delivery_token_ptr token) override {}
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

        std::cout << "Connected. Subscribing to topic: " << TOPIC << std::endl;
        client.subscribe(TOPIC)->wait_for(std::chrono::seconds(5));

        std::cout << "Waiting for messages..." << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(60));

        client.disconnect()->wait_for(std::chrono::seconds(5));
    }
    catch (const mqtt::exception& exc)
    {
        std::cerr << "Error: " << exc.what() << std::endl;
        return 1;
    }

    return 0;
}

