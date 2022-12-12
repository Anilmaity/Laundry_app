import { Image, Text, View } from "react-native";
import React, { useState } from "react";


const Scheduledate = ({ navigation, route }) => {

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
        <View
          style={{
            width: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            // borderWidth: 1,
          }}
        >

          <Image
            source={require("../../Assets/icons/sd.png")}
            style={{
              width: 20,
              height: 20,
              alignSelf: "center",
              marginTop: 10,
            }}
          />

        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",


          }}
        >
          <Text style={{
            width: "80%",
            fontSize: 14,
            fontWeight: "500",
            textAlign: "left",
            alignSelf: "center",
            color: "black",
            // borderWidth: 1,
            marginTop: 5,
          }}>Schedule Date </Text>

        </View>
      </View>



      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
          marginLeft: "10%",
          // borderWidth: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            // width: "50%",
            marginRight: 10,
            height: "100%",
            // borderWidth: 1,
          }}
        >
          <Text style={{
            fontSize: 14,
            fontWeight: "500",
            textAlign: "left",
            alignSelf: "flex-start",
            color: "#38106A",
            paddingBottom: 10,
            borderColor: "black",
            marginTop: 5,
          }}>10:00 </Text>
          <Text style={{
            fontSize: 10,
            fontWeight: "300",
            textAlign: "left",
            alignSelf: "flex-start",
            color: "black",
            borderColor: "black",
            // borderWidth: 1,
          }}>Thu, 15 Apr </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%",
            // borderWidth: 1,
          }}
        >
          <View
            style={{

              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "white",
              borderColor: "#CE1567",
              borderWidth: 1,
              alignSelf: "center",
              marginTop: 5,
            }}
          />
          <Image
            source={require("../../Assets/icons/hline.png")}
            style={{
              width: 50,
              height: 2,
              alignSelf: "center",
              marginTop: 5,

            }}
          />
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#CE1567",
              alignSelf: "center",
              marginTop: 5,
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            // width: "40%",
            marginHorizontal: 10,
            height: "100%",
            // borderWidth: 1,
          }}
        >
          <Text style={{
            fontSize: 14,
            fontWeight: "500",
            textAlign: "center",
            alignSelf: "flex-start",
            color: "#38106A",
            paddingBottom: 10,
            borderColor: "black",
            // borderWidth: 1,
            marginTop: 5,
          }}>20:00 </Text>
          <Text style={{
            fontSize: 10,
            fontWeight: "300",
            textAlign: "left",
            alignSelf: "flex-start",
            color: "black",
            borderColor: "black",
            // borderWidth: 1,
          }}>Thu, 15 Apr </Text>
        </View>
      </View>


    </View>

  );
};
export default Scheduledate;
