import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import Orderstatus from "./OrderDetailComponents/Orderstatus";
import Scheduledate from "./OrderDetailComponents/Scheduledate";
import Paymethod from "./OrderDetailComponents/Paymethod";
import Address from "./OrderDetailComponents/Address";
const Orderdetail = ({ navigation, route }) => {
  const paymethod = route.params.payment;
  const cat = route.params.category;
  const [order, setOrder] = useState([]);
  const [category, setcategory] = useState(cat);
  const total = route.params.total;
  console.log(total, category.length,paymethod);

  const anycloth = (cat) => {
    let qty = 0;
    cat.cloths.map((item, index) => {
      qty += item.quantity;
    });
    if (qty > 0) {

      return true;

    } else {
      return false;
    }

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }
        }
        >
          <Icon name="arrow-back" type="Ionicons" color="#000" onPress={() => {
            navigation.goBack();
          }} />
          <Text style={{
            fontSize: 20,
            alignSelf: "center",
            width: "60%",
            color: "#000",
          }}>Orders Detail</Text>
        </View>
        <Image
          source={require("../Assets/icons/order.png")}
          style={{
            width: "100%",
            height: 130,
            resizeMode: "contain",
          }}
        />
        <Text style={{
          fontSize: 18,
          textAlign: "center",
          alignSelf: "center",
          width: "100%",
          color: "#38106A",
          marginTop: 15,
        }}>Thanks for choosing Us!</Text>

        <Text style={{
          fontSize: 14,
          fontWeight: "300",
          textAlign: "center",
          alignSelf: "center",
          width: "100%",
          color: "black",
          marginTop: 5,
        }}>Your pickup has been confirmed</Text>


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
              width: "50%",

            }}
          >
            <Text style={{
              fontSize: 14,
              fontWeight: "500",
              textAlign: "left",
              alignSelf: "center",
              color: "black",
              // borderWidth: 1,
              marginTop: 5,
            }}>Order# 123 </Text>
            <Text style={{
              fontSize: 10,
              fontWeight: "300",
              textAlign: "left",
              alignSelf: "center",
              color: "black",
              // borderWidth: 1,
              marginTop: 5,
            }}>(2 bags) </Text>

          </View>
          <Text style={{
            fontSize: 10,
            fontWeight: "300",
            textAlign: "left",
            alignSelf: "flex-start",
            color: "black",
            width: "100%",
            paddingBottom: 10,
            borderColor: "#E9EBF0",
            // borderWidth: 1,
            borderBottomWidth: 1,
            marginTop: 5,
          }}>11:35, Thu, 15 Jun 2022 </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderColor: "#E9EBF0",


            }}>

            {
              category.map((item, index) => {
                if (anycloth(item)) {
                  return (
                    <View
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        marginTop: 10,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",

                        }}
                      >
                        <Text style={{
                          fontSize: 14,
                          fontWeight: "500",
                          textAlign: "left",
                          alignSelf: "flex-start",
                          color: "#38106A",
                          // borderWidth: 1,
                          marginTop: 5,
                        }}>{item.name} </Text>
                        {
                          true ?

                            <Icon name={"keyboard-arrow-up"} type="materialicons" color="black"
                                  onPress={() => {
                                    // deleteItem(item)
                                    let cat = category;

                                    console.log(cat[index].selected);
                                    cat[index].selected = !cat[index].selected;
                                    console.log(cat[index].selected);
                                    setcategory(cat);


                                  }}
                            />
                            :

                            <Icon name={"keyboard-arrow-down"} type="materialicons" color="black"
                                  onPress={() => {
                                    // deleteItem(item)
                                    let cat = category;
                                    console.log(cat[index].selected);
                                    cat[index].selected = !cat[index].selected;
                                    console.log(cat[index].selected, cat[index].name);
                                    setcategory(cat);
                                    console.log(cat);


                                  }} />

                        }
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          marginTop: 5,


                        }}
                      >
                        {item.cloths.map((cloth, i) => {
                          if (cloth.quantity > 0) {
                            return (
                              <View
                                key={i}
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: "100%",
                                  marginTop: 5,
                                }}
                              >
                                <Text style={{
                                  fontSize: 12,
                                  fontWeight: "300",
                                  textAlign: "left",
                                  alignSelf: "flex-start",
                                  color: "black",
                                  // borderWidth: 1,
                                }}>{cloth.quantity + " x " + cloth.name + "  (" + cloth.Gender + ") "}</Text>

                                <Text style={{
                                  fontSize: 12,
                                  fontWeight: "400",
                                  textAlign: "center",
                                  // borderWidth: 1,
                                  paddingHorizontal: 5,
                                  alignSelf: "flex-start",
                                  color: "#CE1567",
                                  // borderWidth: 1,
                                }}>{"$" + cloth.quantity * cloth.price}</Text>
                              </View>
                            );
                          }

                        })
                        }
                      </View>


                    </View>
                  );
                }
              })

            }
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: 10,
            }}
          >
            <Text style={{
              fontSize: 14,
              fontWeight: "400",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "#38106A",
              // borderWidth: 1,
              marginTop: 5,
            }}>Subtotal </Text>
            <Text style={{
              fontSize: 16,
              fontWeight: "500",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "#38106A",
              // borderWidth: 1,
              marginTop: 5,
            }}>${total}</Text>

          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: 5,
              paddingBottom: 5,
              borderBottomWidth: 1,
              borderColor: "#E9EBF0",
            }}
          >
            <Text style={{
              fontSize: 14,
              fontWeight: "400",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "#38106A",
              // borderWidth: 1,
              marginTop: 5,
            }}>Tax </Text>
            <Text style={{
              fontSize: 16,
              fontWeight: "500",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "#38106A",
              // borderWidth: 1,
              marginTop: 5,
            }}>${total * 0.2}</Text>

          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: 5,
              paddingBottom: 5,
            }}
          >
            <Text style={{
              fontSize: 14,
              fontWeight: "400",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "#38106A",
              // borderWidth: 1,
              marginTop: 5,
            }}>Total </Text>
            <Text style={{
              fontSize: 16,
              fontWeight: "500",
              textAlign: "left",
              alignSelf: "flex-start",
              color: "#CE1567",
              // borderWidth: 1,
              marginTop: 5,
            }}>${total + total * 0.2}</Text>

          </View>
        </View>
        {/* Order Status*/}
        <Orderstatus/>
        {/*// Schedule Date */}
        <Scheduledate/>
        {/*// Schedule Time */}
        {/* Payment*/}

         <Paymethod paymethod = {paymethod}  />
        {/*  Address */}

        <Address/>
        {/*  Note */}

      </ScrollView>



      <View
        style={{

          width: "100%",
          height: "12%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 15,
          borderTopEndRadius: 15,

          elevation: 5,
        }}>

        <Pressable
          style={{
            width: "90%",
            marginTop:"5%",
            height: "50%",
            borderColor: "#CE1567",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth :1,
            alignSelf: "center",

          }}


        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#CE1567",
            }}
          >
            {"Schedule a laundry "}
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  )
    ;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },


});

export default Orderdetail;
