import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";


const HomeScreen = ({ navigation }) => {

  const [catagory, setcatagory] = useState([{
    name: "Wash",
    selected: true,
    cloths: [{
      id: 0,
      name: "T-Shirt",
      image: require("../Assets/icons/t-shirt.png"),
      selected: false,
      price: 2,
      Gender: "Men",
      quantity: 0,
    }
      ,
      {
        id: 1,
        name: "Shirt",
        image: require("../Assets/icons/shirt.png"),
        selected: false,
        price: 5,
        Gender: "Men",
        quantity: 0,
      },
      {
        id: 2,
        name: "Sleeveless",
        image: require("../Assets/icons/sleeveless.png"),
        selected: false,
        price: 5,
        Gender: "Men",
        quantity: 0,
      }, {
        id: 3,
        name: "Skirt",
        image: require("../Assets/icons/skirt.png"),
        selected: false,
        price: 5,
        Gender: "Men",
        quantity: 0,
      }, {
        id: 4,
        name: "Polo",
        image: require("../Assets/icons/polo.png"),
        selected: false,
        price: 5,
        Gender: "Men",
        quantity: 0,
      }, {
        id: 5,
        name: "Suit",
        image: require("../Assets/icons/suit.png"),
        selected: false,
        price: 5,
        Gender: "Men",
        quantity: 0,
      },
      {
        id: 6,
        name: "Jean",
        image: require("../Assets/icons/jean.png"),
        selected: false,
        price: 5,
        Gender: "Men",
        quantity: 0,
      }],


  },
    {
      id: 0,
      name: "Ironing",
      selected: false,
      cloths: [{
        id: 0,
        name: "T-Shirt",
        image: require("../Assets/icons/t-shirt.png"),
        selected: false,
        price: 2,
        Gender: "Men",
        quantity: 0,
      }
        ,
        {
          id: 1,
          name: "Shirt",
          image: require("../Assets/icons/shirt.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        },
        {
          id: 2,
          name: "Sleeveless",
          image: require("../Assets/icons/sleeveless.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 3,
          name: "Skirt",
          image: require("../Assets/icons/skirt.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 4,
          name: "Polo",
          image: require("../Assets/icons/polo.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 5,
          name: "Suit",
          image: require("../Assets/icons/suit.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        },
        {
          id: 6,
          name: "Jean",
          image: require("../Assets/icons/jean.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }],
    },
    {
      id: 1,
      name: "Fold",
      selected: false,
      cloths: [{
        id: 0,
        name: "T-Shirt",
        image: require("../Assets/icons/t-shirt.png"),
        selected: false,
        price: 2,
        Gender: "Men",
        quantity: 0,
      }
        ,
        {
          id: 1,
          name: "Shirt",
          image: require("../Assets/icons/shirt.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        },
        {
          id: 2,
          name: "Sleeveless",
          image: require("../Assets/icons/sleeveless.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 3,
          name: "Skirt",
          image: require("../Assets/icons/skirt.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 4,
          name: "Polo",
          image: require("../Assets/icons/polo.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 5,
          name: "Suit",
          image: require("../Assets/icons/suit.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        },
        {
          id: 6,
          name: "Jean",
          image: require("../Assets/icons/jean.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }],

    },
    {
      id: 2,
      name: "Dry",
      selected: false,

      cloths: [{
        id: 0,
        name: "T-Shirt",
        image: require("../Assets/icons/t-shirt.png"),
        selected: false,
        price: 2,
        Gender: "Men",
        quantity: 0,
      }
        ,
        {
          id: 1,
          name: "Shirt",
          image: require("../Assets/icons/shirt.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        },
        {
          id: 2,
          name: "Sleeveless",
          image: require("../Assets/icons/sleeveless.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 3,
          name: "Skirt",
          image: require("../Assets/icons/skirt.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 4,
          name: "Polo",
          image: require("../Assets/icons/polo.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 5,
          name: "Suit",
          image: require("../Assets/icons/suit.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        },
        {
          id: 6,
          name: "Jean",
          image: require("../Assets/icons/jean.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }],

    },
    {
      id: 3,
      name: "Clean",
      selected: false,
      cloths: [{
        id: 0,
        name: "T-Shirt",
        image: require("../Assets/icons/t-shirt.png"),
        selected: false,
        price: 2,
        Gender: "Men",
        quantity: 0,
      }
        ,
        {
          id: 1,
          name: "Shirt",
          image: require("../Assets/icons/shirt.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        },
        {
          id: 2,
          name: "Sleeveless",
          image: require("../Assets/icons/sleeveless.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 3,
          name: "Skirt",
          image: require("../Assets/icons/skirt.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 4,
          name: "Polo",
          image: require("../Assets/icons/polo.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }, {
          id: 5,
          name: "Suit",
          image: require("../Assets/icons/suit.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        },
        {
          id: 6,
          name: "Jean",
          image: require("../Assets/icons/jean.png"),
          selected: false,
          price: 5,
          Gender: "Men",
          quantity: 0,
        }],

    },


  ]);

  const [selected, setselected] = useState(0);
  const [total, settotal] = useState(0);
  const [totalquantity, settotalquantity] = useState(0);
  const [selectedcloths, setselectedcloths] = useState([]);

  const calculateTotal = (newCloths) => {
    let total = 0;
    let totalquantity = 0;
    newCloths.forEach((cat) => {
      cat.cloths.forEach((cloth) => {
        total += cloth.price * cloth.quantity;
        totalquantity += cloth.quantity;
      });
    });
    settotal(total);
    settotalquantity(totalquantity);
  };


  return (
    <SafeAreaView style={styles.container}>
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
          console.log("back");
        }} />
        <Text style={{
          fontSize: 20,
          alignSelf: "center",
          width: "60%",
          color: "#000",
        }}>Orders List</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#fff",
          padding: 10,

        }}
      >

        {
          catagory.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={item.selected ? styles.catselected : styles.catunselected}
                onPress={() => {
                  const newCatagory = catagory.map((cat, index) => {
                    if (item.id === cat.id) {
                      return {
                        ...cat,
                        selected: true,
                      };
                    } else {
                      return {
                        ...cat,
                        selected: false,
                      };
                    }
                  });
                  // console.log(newCatagory);
                  index === 0 ? setselected(catagory[0]) : index === 1 ? setselected(catagory[1]) : setselected(catagory[2]);

                  setcatagory(newCatagory);
                  setselected(index);
                }}
              >
                <Text
                  style={{
                    color: item.selected ? "#fff" : "#38106A",
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            );
          })

        }

      </ScrollView>

      <View style={{
        width: "100%",
        height: "85%",
        // borderWidth: 1,
      }}>
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            backgroundColor: "#fff",
            padding: 10,
            // height: "100%",

          }}


        >
          {
            catagory[selected].cloths.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    padding: 2,
                    borderRadius: 5,
                    // borderWidth: 1,
                    width: "100%",
                    height: 80,
                    backgroundColor: "#F9F9F9",
                    marginHorizontal: 5,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={item.image}

                    style={{
                      width: "10%",
                      height: "100%",
                      alignSelf: "center",
                      justifyContent: "flex-start",
                      resizeMode: "contain",
                      marginHorizontal: 10,
                    }}
                  />
                  <View
                    style={{
                      width: "40%",
                      height: "100%",
                      alignSelf: "center",
                      justifyContent: "flex-start",
                      marginHorizontal: 10,
                    }}
                  >

                    <Text
                      style={{
                        height: "50%",
                        width: "100%",
                        fontWeight: "bold",
                        fontSize: 15,
                        textAlignVertical: "center",
                        alignSelf: "flex-start",
                        justifyContent: "center",
                        color: "#38106A",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        width: "60%",
                        height: "50%",
                        // borderWidth: 1,
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          height: "100%",
                          width: "50%",
                          color: "#CE1567",
                        }}
                      >
                        {"$" + item.price}
                      </Text>


                      <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        width: "100%",
                        height: "80%",
                        // borderWidth: 1,
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                      }}
                      >
                        { true?
                      <Pressable
                        style={{
                          fontSize: 12,
                          height: "100%",
                          width: "30%",
                          color: "#38106A",
                          display: "flex",
                          flexDirection: "row",
                          // borderWidth: 1,
                        }}
                        onPress={ () => {
                          console.log("add");
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 12,
                            height: "50%",
                            width: "100%",
                            color: "#38106A",
                            marginTop: 3,
                            // borderWidth: 1,
                          }}
                        >
                        {item.Gender}
                        </Text>
                        <Icon name={"keyboard-arrow-down"} type="materialicons" color="black"
                      />


                      </Pressable>
                      :

                      <View
                        style={{
                          height: "100%",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                          // borderWidth: 1,
                        }}
                      >
                        <Pressable
                          style={{
                            fontSize: 12,
                            height: "50%",
                            width: "100%",
                            color: "#38106A",
                            // borderWidth: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              height: "100%",
                              width: "100%",
                              color: "#38106A",
                              // borderWidth: 1,
                            }}
                            >
                            Men
                          </Text>
                        </Pressable>

                        <Pressable
                          style={{
                            fontSize: 12,
                            height: "50%",
                            width: "100%",
                            color: "#38106A",

                            // borderWidth: 1,
                          }}>

                          <Text
                            style={{
                              fontSize: 12,
                              height: "100%",
                              width: "100%",
                              color: "#38106A",
                              // borderWidth: 1,
                            }}
                          >
                            Women
                          </Text>
                        </Pressable>


                      </View>
                      }
                      </View>
                      </View>

                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      width: "30%",
                      marginLeft: "10%",
                      height: "80%",
                      // borderWidth: 1,
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                    }}
                  >
                    <View
                      style={{
                        width: "30%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRightColor: "#38106A",
                      }}
                    >

                      <Icon name="minuscircleo" size={20} type="antdesign" color="#38106A"
                            onPress={() => {
                              console.log(catagory.length);
                              let newcatagory = catagory.map((cat, index) => {
                                if (cat.selected) {
                                  const newCloths = cat.cloths.map((cloth, index) => {
                                    if (item.id === cloth.id) {
                                      if (cloth.quantity > 0) {
                                        cloth.quantity -= 1;
                                      }
                                      else {
                                        cloth.quantity = 0;
                                      }
                                      return {
                                        ...cloth,
                                      };

                                    } else {
                                      return {
                                        ...cloth,
                                      };
                                    }
                                  });
                                  return {
                                    ...cat,
                                    cloths: newCloths,
                                  };
                                } else {
                                  return {
                                    ...cat,
                                  };

                                }
                              });

                              setcatagory(newcatagory);
                              calculateTotal(newcatagory);
                            }}

                      />

                    </View>
                    <View
                      style={{
                        width: "30%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,

                        }}
                      >
                        {item.quantity}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: "30%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon name="pluscircleo" type="antdesign" color="#38106A"
                            onPress={() => {
                              console.log(catagory.length);
                              let newcatagory = catagory.map((cat, index) => {
                                if (cat.selected) {
                                  const newCloths = cat.cloths.map((cloth, index) => {
                                    if (item.id === cloth.id) {
                                      return {
                                        ...cloth,
                                        quantity: cloth.quantity + 1,
                                      };
                                    } else {
                                      return {
                                        ...cloth,
                                      };
                                    }
                                  });
                                   return {
                                      ...cat,
                                      cloths: newCloths,
                                    };
                                } else {
                                  return {
                                    ...cat,
                                  };

                                }
                              });

                              setcatagory(newcatagory);
                              calculateTotal(newcatagory);
                            }}
                              />
                    </View>


                  </View>
                </View>
              );
            })
          }


        </ScrollView>
        {

          totalquantity > 0 ?
            <View
              style={{

                width: "101%",
                height: "20%",
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                bottom: 0,
                borderTopLeftRadius: 20,
                borderTopEndRadius: 20,
                elevation: 3,
              }}>
              <View
                style={{
                  marginTop: "5%",
                  width: "90%",
                  height: "45%",
                  borderRightColor: "#38106A",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{

                    width: "10%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightColor: "#38106A",
                  }}
                >
                  <Image
                    source={require("../Assets/icons/ibox.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignSelf: "center",
                      justifyContent: "flex-start",
                      resizeMode: "contain",
                      marginHorizontal: 10,
                    }}
                    />
                </View>

                <View
                  style={{
                    width: "50%",
                    height: "100%",
                    marginLeft: "5%",
                    justifyContent: "center",
                    borderRightColor: "#38106A",
                  }}
                >

                  <Text
                    style={{
                      fontSize: 10,
                      color: "#38106A",
                    }}
                  >
                    {"Total"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#38106A",
                    }}
                  >
                    {totalquantity + " Items"}
                  </Text>

                </View>

                <View
                  style={{
                    width: "30%",
                    height: "100%",
                    marginLeft: "5%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    // borderWidth : 1,
                    borderRightColor: "#38106A",
                  }}
                >

                  <Text
                    style={{
                      fontSize: 10,
                      color: "#38106A",
                    }}
                  >
                    {"Cost"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#CE1567",
                    }}
                  >
                    {total + " $"}
                  </Text>

                </View>
              </View>
              <Pressable
                style={{
                  width: "90%",
                  height: "30%",
                  backgroundColor: "#CE1567",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  alignSelf: "center",

                }}
                onPress={() => {
                  navigation.navigate("ScheduleScreen", {
                    'total': total,
                    'totalqty': totalquantity,
                    'category': catagory,

                  });
                }}

              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#F9F9F9",
                  }}
                >
                  {"Confirm Order"}
                </Text>
              </Pressable>

            </View> :
            null
        }


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
  catselected:
{
  backgroundColor:  "#CE1567",
  padding: 2,
  borderRadius: 5,
  borderWidth: 1,
  width: 80,
  height: 30,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 5,
  borderColor: "#CE1567"
},
  catunselected:
    {
      backgroundColor: "#fff",
      padding: 2,
      borderRadius: 5,
      borderWidth: 1,
      width: 80,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5,
      borderColor:  "#38106A",
    }



});

export default HomeScreen;
