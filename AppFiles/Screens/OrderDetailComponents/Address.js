import { Image, Text, View } from "react-native";
import React, { useState } from "react";


const Address = ({ navigation, route }) => {

  return (
    <View
      style={{
        width: "90%",
        alignSelf: "center",
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        borderColor: "#E9EBF0",

      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",

        }}
      >
        <Image
          source={require("../../Assets/icons/map.png")}
          style={{
            width: 20,
            height: 20,
            resizeMode: "contain",
            marginRight: 10,
          }}
        />
        <Text style={{
          width: "80%",
          fontSize: 14,
          fontWeight: "500",
          textAlign: "left",
          alignSelf: "center",
          color: "black",
          // borderWidth: 1,
          marginTop: 5,
        }}>Address Delivery </Text>

      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "15%",
            height: "100%",
            // borderWidth: 1,
          }}
        >
          <Image
            source={require("../../Assets/icons/circle.png")}
            style={{
              marginTop: 10,
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
          <Image
            source={require("../../Assets/icons/line.png")}
            style={{
              width: 20,
              height: 50,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
          <Image
            source={require("../../Assets/icons/marker.png")}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />

        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "80%",
            // borderWidth: 1,
          }}
        >

          <View>
            <Text style={{
              fontSize: 14,
              fontWeight: "500",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "black",
              width: "100%",
              paddingBottom: 5,
              borderColor: "black",
              marginTop: 5,
            }}>Pickup Address </Text>
            <Text style={{
              fontSize: 10,
              fontWeight: "400",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "black",
              width: "100%",
              borderColor: "black",
              // borderWidth: 1,
            }}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi </Text>

          </View>

          <View>
            <Text style={{
              fontSize: 14,
              fontWeight: "500",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "black",
              width: "100%",
              paddingBottom: 5,
              borderColor: "black",
              marginTop: 20,
            }}>Delivery Address </Text>
            <Text style={{
              fontSize: 10,
              fontWeight: "400",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "black",
              width: "100%",
              borderColor: "black",
              // borderWidth: 1,
            }}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi </Text>

          </View>


        </View>
      </View>

    </View>

  );
};
export default Address;
