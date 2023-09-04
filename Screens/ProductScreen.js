import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProductScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable style={styles.backContainer} onPress={()=>navigation.goBack()}>
                <Ionicons name="chevron-back" size={18} color="black" />
            </Pressable>
            <View style={[styles.imgContainer, {backgroundColor: route.params.bgColor}]}>
                <Image source={route.params.img} style={styles.image} />
            </View>
            <ScrollView style={styles.scrollable} automaticallyAdjustContentInsets={false}>
                <Text style={styles.name}>{route.params.name}</Text>
                {route.params.weight.length!=0 && <Text style={styles.weight}>{route.params.weight}</Text>}
                <View style={[styles.row, {marginVertical: 16}]}>
                    <View style={[styles.qty, styles.row]}>
                        <View style={[styles.left]}>
                            <Entypo name="minus" size={18} color="black" />
                        </View>
                        <View style={styles.mid}>
                            <Text>0</Text>
                        </View>
                        <View style={styles.right}>
                            <Entypo name="plus" size={18} color="black" />
                        </View>
                    </View>
                    <Text style={styles.price}>${route.params.price}</Text>
                </View>
                <Text style={styles.heading}>Product Description</Text>
                <Text style={styles.desc}>{route.params.desc}</Text>
                <View style={[styles.row, {marginTop: 32}]}>
                    <View style={[styles.heartBtn, {borderColor: route.params.bgColor}]}>
                        <Entypo name="heart" size={24} color={route.params.bgColor} />
                    </View>
                    <View style={[styles.atcBtn, {backgroundColor: route.params.bgColor}]}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Add to Cart</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        height: '40%',
        paddingHorizontal: 64,
        paddingTop: 90,
        paddingBottom: 64
    },
    image: {
        width: '100%',
        height: '100%'
    },
    backContainer: {
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 99,
        padding: 8
    },
    scrollable: {
        backgroundColor: '#fefffe',
        paddingHorizontal: 16,
        paddingVertical: 32,
        borderRadius: 30,
        marginTop: -32
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8
    },
    weight: {
        fontWeight: 300,
        color: '#a9a7a4'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        backgroundColor: '#f5f3f0',
        padding: 8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    mid: {
        backgroundColor: '#f5f3f0',
        padding: 8,
    },
    right: {
        backgroundColor: '#f5f3f0',
        padding: 8,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 16
    },
    desc: {
        lineHeight: 25,
        fontWeight: 200
    },
    heartBtn: {
        borderWidth: 1,
        padding: 16,
        borderRadius: 10
    },
    atcBtn: {
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProductScreen