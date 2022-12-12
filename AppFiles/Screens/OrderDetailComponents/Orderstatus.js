import { Image, Text, View } from "react-native";
import React, { useState } from "react";


const Orderstatus = ({ navigation, route }) => {
  const [detail, setDetail] = useState(false);

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
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: 25,
          height: 30,
          marginLeft: 10,
          marginRight: 10,
          // borderWidth: 1,
        }}
        >

        <Image
          source={require("../../Assets/icons/os.png")}
          style={{
            width: 20,
            height: 25,

          }}
        />
        </View>

        <Text style={{
          width: "70%",
          fontSize: 14,
          fontWeight: "500",
          textAlign: "left",
          alignSelf: "center",
          color: "#38106A",
          // borderWidth: 1,
        }}>Order Status </Text>
        <Text style={{
          width: "20%",
          fontSize: 10,
          fontWeight: "400",
          textAlign: "center",
          alignSelf: "center",
          color: "#CE1567",
          // borderWidth: 1,
        }}
        onPress={() => setDetail(!detail)}
        >{detail ? "Hide detail" : "View detail"} </Text>

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
            source={require("../../Assets/icons/status.png")}
            style={{
              width: 13,
              height: 13,
              alignSelf: "center",
              marginTop: 5,
            }}
          />
          <Image
            source={require("../../Assets/icons/line.png")}
            style={{
              width: 2,
              height: 30,
              alignSelf: "center",
            }}
          />
          {detail ? (
            <>
              <Image
                source={require("../../Assets/icons/status.png")}
                style={{
                  width: 13,
                  height: 13,
                  alignSelf: "center",
                  marginTop: 5,
                }}
              />
          <Image
            source={require("../../Assets/icons/line.png")}
            style={{
              width: 2,
              height: 30,
              alignSelf: "center",
              marginTop: 5,
            }}
          />
            </>
            ): null}

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

          <View
          >
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
            }}>Delivered </Text>
            <Text style={{
              fontSize: 10,
              fontWeight: "300",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "black",
              width: "100%",
              borderColor: "black",
              // borderWidth: 1,
            }}>11:35, Thu, 15 Jun 2022 </Text>

          </View>

          {detail ? (
            <>
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
            }}>Picked Up </Text>
            <Text style={{
              fontSize: 10,
              fontWeight: "300",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "black",
              width: "100%",
              borderColor: "black",
              // borderWidth: 1,
            }}>11:35, Thu, 15 Jun 2022 </Text>

          </View>
            </>
            ): null}

        </View>
      </View>

    </View>


  );
};
export default Orderstatus;
