import { Image, Text, View } from "react-native";
import React, { useState } from "react";


const Paymethod = ({ navigation, paymethod }) => {
  console.log(paymethod);
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
        <View>
          <Image
            source={require("../../Assets/icons/pay.png")}
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
          }}
        >
          <Text style={{
            width: "100%",
            fontSize: 14,
            fontWeight: "500",
            textAlign: "left",
            alignSelf: "center",
            color: "#38106A",
            // borderWidth: 1,
            marginTop: 5,
          }}>Payment Method </Text>
          <Text style={{
            width: "100%",
            fontSize: 12,
            fontWeight: "300",
            textAlign: "left",
            alignSelf: "center",
            // borderWidth: 1,
            color: "grey",
            // borderWidth: 1,
            marginTop: 5,
          }}>{paymethod == "Card" ? "Visa/Master Card:**** **** **** 1234" :paymethod == "COD" ? "Cash On Delivery" : "Paypal" }</Text>
        </View>
      </View>


    </View>

  );
};
export default Paymethod;
