import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import React from 'react'
import { Icon, Divider } from 'react-native-elements'
import Svg, {
    Circle,
    Ellipse,
    Path,

} from 'react-native-svg';
const ScheduleScreen = ({ navigation, route }) => {
    console.log(route.params.category.length)
    const total = route.params.total
    const totalqty = route.params.totalqty
    const category = route.params.category
    const Tax = total * 0.2
    const [selectedpayment, setselectedpayment] = React.useState("Card");

    return (
        <View style={styles.container}>
            <ScrollView

            >
                <View style={{ flexDirection: 'row', margin: 10, marginBottom: 20 }}>
                    <View style={{ position: 'absolute', zIndex: 999 }}>
                        <Icon
                            onPress={() => {
                                navigation.goBack()
                            }}
                            name='arrow-back'
                            type='material'
                        ></Icon>
                    </View>

                    <Text style={{ textAlign: 'center', width: '100%', color: 'black', fontSize: 16, fontWeight: '600' }}>Schedule A Pickup</Text>
                </View>

                <View style={{ paddingHorizontal: 16, marginBottom: 10 }}>
                    <Text style={[styles.heading, { fontWeight: '600', fontSize: 16 }]}>Price Details</Text>
                    <View style={{ padding: 10, backgroundColor: '#F9F9F9', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={[styles.heading, { fontSize: 14 }]}>SubTotal</Text>
                            <Text style={[styles.heading, { fontSize: 16, fontWeight: '600' }]}>${total}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={[styles.heading, { fontSize: 14 }]}>Tax</Text>
                            <Text style={[styles.heading, { fontSize: 16, fontWeight: '600' }]}>${Tax}</Text>
                        </View>
                        <Divider style={{ marginBottom: 10 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={[{ fontWeight: '600', color: '#38106A', }]}>Total</Text>
                            <Text style={[{ fontSize: 16, fontWeight: '600', color: '#CE1567', }]}>${total + Tax}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 18, marginBottom: 10 }}>
                    <Text style={[styles.heading, { fontWeight: '600', fontSize: 16 }]}>Schedule Date</Text>
                    <View style={{ borderWidth: 1, borderColor: '#82858A', borderRadius: 10, position: 'relative', flexDirection: 'row', height: 65, marginTop: 5 }}>
                        <View style={{ margin: 14, width: '40%' }}>
                            <View style={{ position: 'absolute', top: -22, left: 20, backgroundColor: "white", paddingHorizontal: 8, }}>

                                <Text style={{ fontSize: 12, color: '#82858A' }}>Pickup Time</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 24, height: 24, }}
                                    source={require('../Assets/icons/pickupDate.png')} />
                                <View style={{ marginHorizontal: 14 }}>
                                    <Text style={{ color: '#292929' }}>Thu, 1 Apr</Text>
                                    <Text style={{ color: '#38106A', fontWeight: '600', fontSize: 18 }}>10:00 AM</Text>
                                </View>
                            </View>
                        </View>
                        {/* <View style={{}}>
                        <Svg width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M1 1L0.999999 29" stroke="#E9EBF0" stroke-linecap="round" stroke-linejoin="round" fill={'green'} />
                        </Svg>
                        <Svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M1 1L3.5 4L1 7" stroke="#E9EBF0" stroke-linejoin="round" />
                        </Svg>
                        <Svg width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M1 1L0.999999 29" stroke="#E9EBF0" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>

                    </View> */}

                        <View>
                            <Svg style={{ zIndex: -1 }} width="4" height="64" viewBox="0 0 4 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1 1L0.999999 29" stroke="#E9EBF0" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M1 35L0.999999 63" stroke="#E9EBF0" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M1 29L3.5 32L1 35" stroke="#E9EBF0" stroke-linejoin="round" />
                            </Svg>

                        </View>
                        <View style={{ margin: 14 }}>
                            <View style={{ position: 'absolute', top: -22, left: 20, backgroundColor: "white", paddingHorizontal: 8, }}>

                                <Text style={{ fontSize: 12, color: '#82858A' }}>Delivery Time</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 24, height: 24, }}
                                    source={require('../Assets/icons/deliverDate.png')} />
                                <View style={{ marginHorizontal: 14 }}>
                                    <Text style={{ color: '#292929' }}>Web, 2 Apr</Text>
                                    <Text style={{ color: '#38106A', fontWeight: '600', fontSize: 18 }}>21:00 PM</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ paddingHorizontal: 18, marginBottom: 10 }}>
                    <Text style={[styles.heading, { fontWeight: '600', fontSize: 16 }]}>Payment Method</Text>

                    <View style={{ borderWidth: 1, borderColor: '#E9EBF0', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}
                                onPress={() => {
                                    setselectedpayment("Paypal")
                                }}>

                                {
                                    selectedpayment === "Paypal" ?
                                        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Circle cx="11" cy="11" r="10.5" stroke="#CE1567" />
                                            <Path d="M7 11L11 14.5L16 8" stroke="#CE1567" stroke-linecap="round" />
                                        </Svg>

                                        : <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Circle cx="11" cy="11" r="10.5" stroke="#E9EBF0" />
                                        </Svg>
                                }
                                <View style={{ marginLeft: 18 }}>
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#38106A' }}>Pay Via Paypal</Text>
                                    <Text style={{ fontSize: 12, color: '#CE1567' }}>+ Add account</Text>
                                </View>
                            </Pressable>
                            <Image style={{ width: 34, height: 34, }}
                                source={require('../Assets/icons/paypal_logo.png')} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
                            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}
                                onPress={() => {
                                    setselectedpayment("Card")
                                }}>
                                {
                                    selectedpayment === "Card" ?
                                        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Circle cx="11" cy="11" r="10.5" stroke="#CE1567" />
                                            <Path d="M7 11L11 14.5L16 8" stroke="#CE1567" stroke-linecap="round" />
                                        </Svg>

                                        : <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Circle cx="11" cy="11" r="10.5" stroke="#E9EBF0" />
                                        </Svg>
                                }
                                <View style={{ marginLeft: 18 }}>
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#38106A' }}>Visa/Master Card</Text>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginRight: 20 }}>
                                            <Text style={{ fontSize: 12, color: '#82858A' }}>**** **** **** 1234</Text>
                                        </View>
                                        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M1.16667 12.8333H12.2778" stroke="#CE1567" stroke-miterlimit="10" stroke-linecap="square" />
                                            <Path d="M7.27779 2.83333L9.50001 5.05555" stroke="#CE1567" stroke-miterlimit="10" />
                                            <Path d="M4.50001 10.0556L1.72223 10.6111L2.27778 7.83333L8.94445 1.16666L11.1667 3.38889L4.50001 10.0556Z" stroke="#CE1567" stroke-miterlimit="10" stroke-linecap="square" />
                                        </Svg>
                                    </View>

                                </View>
                            </Pressable>
                            <Image style={{ height: 16, width: 48 }}
                                source={require('../Assets/icons/Visa_logo.png')} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
                            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}
                                onPress={() => {
                                    setselectedpayment("COD")
                                }}>

                                {
                                    selectedpayment === "COD" ?
                                        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Circle cx="11" cy="11" r="10.5" stroke="#CE1567" />
                                            <Path d="M7 11L11 14.5L16 8" stroke="#CE1567" stroke-linecap="round" />
                                        </Svg>

                                        : <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Circle cx="11" cy="11" r="10.5" stroke="#E9EBF0" />
                                        </Svg>
                                }
                                <View style={{ marginLeft: 18 }}>
                                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#38106A' }}>Cash On Delivery</Text>
                                    {/* <Text style={{ fontSize: 12, color: '#CE1567' }}>+ Add account</Text> */}
                                </View>
                            </Pressable>
                            <Image style={{ width: 56, height: 56, }}
                                source={require('../Assets/icons/cash_on_delivery_logo.png')} />
                        </View>
                    </View>

                </View>
                <View style={{ paddingHorizontal: 18, marginBottom: 10 }}>
                    <Text style={[styles.heading, { fontWeight: '600', fontSize: 16 }]}>Address</Text>
                    <View style={{ borderWidth: 1, borderColor: '#E9EBF0', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, }}>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ alignItems: 'center', width: 24 }}>
                                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="8" cy="8" r="8" fill="#32B6E9" />
                                    <Circle cx="8" cy="8" r="4" fill="white" />
                                </Svg>
                                <View style={{ height: 50, borderRightWidth: 1, borderStyle: 'dashed', width: 1, borderColor: '#C3C8D2', }}>

                                </View>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ color: '#38106A', fontWeight: '600' }}>Pickup Address</Text>
                                <Text style={{ color: '#82858A', fontSize: 12, width: '90%' }}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi</Text>
                                <Divider style={{ marginTop: 10 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ alignItems: 'center' }}>
                                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M19.6667 9.33333C19.6667 15.3333 12.3333 22 12.3333 22C12.3333 22 5 15.3333 5 9.33333C5 7.38841 5.77262 5.52315 7.14788 4.14788C8.52315 2.77262 10.3884 2 12.3333 2C14.2783 2 16.1435 2.77262 17.5188 4.14788C18.8941 5.52315 19.6667 7.38841 19.6667 9.33333V9.33333Z" stroke="#CE1567" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M12.3333 12.6667C14.1743 12.6667 15.6667 11.1743 15.6667 9.33333C15.6667 7.49238 14.1743 6 12.3333 6C10.4924 6 9 7.49238 9 9.33333C9 11.1743 10.4924 12.6667 12.3333 12.6667Z" stroke="#CE1567" stroke-linecap="round" stroke-linejoin="round" />
                                </Svg>


                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ color: '#38106A', fontWeight: '600' }}>Delivery Address</Text>
                                <Text style={{ color: '#82858A', fontSize: 12, width: '90%' }}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >


            <View
                style={{

                    width: "101%",
                    height: "12%",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    bottom: 0,
                    borderTopLeftRadius: 20,
                    borderTopEndRadius: 20,
                    elevation: 10,
                    backgroundColor: 'white'
                }}>

                <Pressable
                    style={{
                        width: "90%",
                        marginTop: "5%",
                        height: "50%",
                        backgroundColor: "#CE1567",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        alignSelf: "center",

                    }}
                    onPress={() => {
                        navigation.navigate("Orderdetail", {
                            'total': total,
                            'totalqty': totalqty,
                            'category': category,
                            'payment': selectedpayment,
                        }
                        );
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

            </View>

        </View>
    )
}

export default ScheduleScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heading: {
        color: '#38106A',
        marginBottom: 10
    }
})
