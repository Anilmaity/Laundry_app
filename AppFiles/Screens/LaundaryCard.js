import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
const LaundaryCard = ({ item, handleMinus, handlePlus, handleGenderSelection }) => {


    const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false)

    return (
        <View

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
                    <Pressable
                        style={{
                            fontSize: 12,

                            color: "#38106A",
                        }}
                        onPress={() => {
                            console.log("add");
                        }}
                    >
                        <View style={{ flexDirection: 'row', position: 'relative' }} >
                            {
                                isGenderDropdownOpen ?

                                    <View style={{ position: 'absolute', backgroundColor: 'white', zIndex: 999, right: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                                        <Text onPress={() => {
                                            handleGenderSelection(item, "Men")
                                            setIsGenderDropdownOpen(false)
                                        }} style={{ fontSize: 12, color: 'black' }}>Men</Text>
                                        <Text onPress={() => {
                                            handleGenderSelection(item, "Women")
                                            setIsGenderDropdownOpen(false)
                                        }} style={{ fontSize: 12, color: 'black' }}>Women</Text>
                                    </View>
                                    : null
                            }
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#38106A",
                                }}
                            >

                                {item.Gender}
                            </Text>

                            <Icon
                                onPress={() => {
                                    setIsGenderDropdownOpen(!isGenderDropdownOpen)
                                }}
                                name='expand-more'
                                type='material'
                                color={'black'}
                                size={20}
                            />

                        </View>
                    </Pressable>

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
                            handleMinus(item)

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
                            handlePlus(item)

                        }}
                    />
                </View>


            </View>
        </View>
    )
}

export default LaundaryCard
