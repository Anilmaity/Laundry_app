import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import LaundaryCard from "./LaundaryCard";

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

  const handleMinus = (item) => {
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
  }


  const handlePlus = (item) => {
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
  }


  const handleGenderSelection = (item, gen) => {
    console.log(item.Gender, gen)
    let tempCategory = [...catagory].map((cat) => {
      let cloths = cat.cloths.map((cloth) => {
        if (cloth.id === item.id) {
          console.log(cat.cloths)

          return { ...cloth, Gender: gen };

        }
        else {
          return { ...cloth };
        }
      })
      return { ...cat, cloths: cloths };


    })
    // console.log(tempCategory)
    setcatagory([...tempCategory])
  }

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
                <LaundaryCard
                  key={item.id}
                  item={item}
                  handleMinus={(item) => {
                    handleMinus(item)
                  }}
                  handlePlus={(item) => {
                    handlePlus(item)
                  }}
                  handleGenderSelection={(item, gen) => {
                    handleGenderSelection(item, gen)
                  }}

                />
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
                elevation: 2,
                // backgroundColor: 'white'

              }}>
              <View
                style={{
                  // marginTop: "5%",
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
                      fontSize: 12,
                      color: "#38106A",
                    }}
                  >
                    {"Total"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
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
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#CE1567",
                    }}
                  >
                    {total + "$"}
                  </Text>

                </View>
              </View>
              <Pressable
                style={{
                  width: "90%",
                  padding: 10,
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
                    fontSize: 16,
                    fontWeight: "600",
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
    backgroundColor: "#CE1567",
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
    borderColor: "#38106A",
  }



});

export default HomeScreen;
