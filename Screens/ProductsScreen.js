import { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, TextInput, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ProductsScreen = () => {
    const [fruits, setFruits] = useState([
        {
            id: 1,
            name: 'Strawberries',
            price: 2.45,
            weight: '1 lb',
            desc: 'Strawberries are delicious, vibrant red fruits known for their sweet and slightly tart flavor. They are small, heart-shaped, and often covered in tiny seeds on their outer surface. Strawberries are a popular summertime treat and can be enjoyed fresh on their own, added to various dishes like salads and desserts, or turned into jams and preserves. They are rich in vitamin C, antioxidants, and fiber, making them a nutritious choice for a wide range of culinary creations.',
            img: require('../images/strawberries.png'),
            bgColor: '#fee2e5',
            height: 220,
            imgHeight: 60
        },
        {
            id: 2,
            name: 'Pineapple',
            price: '1.25 each',
            weight: '',
            desc: 'Pineapple is a tropical fruit characterized by its spiky, rough exterior and sweet, juicy flesh. It has a vibrant yellow or golden color when ripe and is known for its distinct, tropical flavor that combines sweetness with a hint of tartness. Pineapples are commonly enjoyed fresh, sliced, and added to fruit salads, desserts, or as a refreshing snack. They are also used in various culinary dishes, including savory recipes like pineapple salsa or as a topping on pizzas. Pineapples are a good source of vitamin C, manganese, and bromelain, an enzyme known for its potential health benefits.',
            img: require('../images/pineapple.png'),
            bgColor: '#fefbd9',
            height: 220,
            imgHeight: 110
        },
        {
            id: 3,
            name: 'Blueberries',
            price: 4.07,
            weight: '1 lb',
            desc: 'Blueberries are small, round, and indigo-colored berries known for their sweet and slightly tangy flavor. They are native to North America and are often considered a superfood due to their high antioxidant content. Blueberries can be enjoyed fresh as a healthy snack or added to cereals, yogurt, muffins, and smoothies, enhancing both flavor and nutrition. They are packed with vitamins, particularly vitamin C and vitamin K, as well as dietary fiber. Blueberries are celebrated for their potential health benefits, including promoting heart health and cognitive function. Their versatility and vibrant flavor make them a popular ingredient in a variety of culinary creations.',
            img: require('../images/blueberry.png'),
            bgColor: '#e5e4ff',
            height: 220,
            imgHeight: 105
        },
        {
            id: 4,
            name: 'Dragon Fruit',
            price: 5.36,
            weight: 'Average 0.87 lb',
            desc: 'Dragon fruit is not only visually appealing but also nutritious. It is a good source of vitamin C, fiber, and various antioxidants, which can contribute to overall health. Dragon fruit can be enjoyed fresh, either scooped out with a spoon or added to fruit salads, smoothie bowls, or desserts. Its unique appearance and taste make it a popular choice for adding a tropical touch to culinary dishes and beverages.',
            img: require('../images/dragonfruit.png'),
            bgColor: '#ffeefe',
            height: 220,
            imgHeight: 95
        },
        {
            id: 5,
            name: 'Lychee',
            price: '8.22 per lb',
            weight: '1 lb',
            desc: 'Lychee has a delightful, sweet taste with floral undertones, often described as a combination of grape and rose. Its commonly enjoyed fresh as a refreshing snack or used in fruit salads, desserts, and beverages. Lychees are rich in vitamin C and offer several health benefits due to their antioxidant content. Their distinctive flavor and texture make them a sought-after ingredient in both culinary and culinary creations, particularly in Asian cuisine.',
            img: require('../images/lychee.png'),
            bgColor: '#d9fed0',
            height: 220,
            imgHeight: 105
        },
        {
            id: 6,
            name: 'Mango',
            price: '1.01 each',
            weight: '',
            desc: 'Mangoes are enjoyed fresh by peeling away the skin and cutting the flesh away from the large, flat seed in the center. They can be eaten on their own, added to fruit salads, blended into smoothies, or used in a wide range of dishes, including salsas, chutneys, and desserts. Mangoes are a good source of vitamins A and C, as well as dietary fiber. Their versatility, delicious taste, and nutritional benefits make them a beloved fruit worldwide.',
            img: require('../images/mango.png'),
            bgColor: '#fee18e',
            height: 220,
            imgHeight: 95
        },
    ])
    const [query, setQuery] = useState('');
    const navigation = useNavigation();
    function handleInput(enteredValue) {
        setQuery(enteredValue);
        if(query.length === 0)
        {
            setFruits([
                {
                    id: 1,
                    name: 'Strawberries',
                    price: 2.45,
                    weight: '1 lb',
                    desc: 'Strawberries are delicious, vibrant red fruits known for their sweet and slightly tart flavor. They are small, heart-shaped, and often covered in tiny seeds on their outer surface. Strawberries are a popular summertime treat and can be enjoyed fresh on their own, added to various dishes like salads and desserts, or turned into jams and preserves. They are rich in vitamin C, antioxidants, and fiber, making them a nutritious choice for a wide range of culinary creations.',
                    img: require('../images/strawberries.png'),
                    bgColor: '#fee2e5',
                    height: 220,
                    imgHeight: 60
                },
                {
                    id: 2,
                    name: 'Pineapple',
                    price: '1.25 each',
                    weight: '',
                    desc: 'Pineapple is a tropical fruit characterized by its spiky, rough exterior and sweet, juicy flesh. It has a vibrant yellow or golden color when ripe and is known for its distinct, tropical flavor that combines sweetness with a hint of tartness. Pineapples are commonly enjoyed fresh, sliced, and added to fruit salads, desserts, or as a refreshing snack. They are also used in various culinary dishes, including savory recipes like pineapple salsa or as a topping on pizzas. Pineapples are a good source of vitamin C, manganese, and bromelain, an enzyme known for its potential health benefits.',
                    img: require('../images/pineapple.png'),
                    bgColor: '#fefbd9',
                    height: 220,
                    imgHeight: 110
                },
                {
                    id: 3,
                    name: 'Blueberries',
                    price: 4.07,
                    weight: '1 lb',
                    desc: 'Blueberries are small, round, and indigo-colored berries known for their sweet and slightly tangy flavor. They are native to North America and are often considered a superfood due to their high antioxidant content. Blueberries can be enjoyed fresh as a healthy snack or added to cereals, yogurt, muffins, and smoothies, enhancing both flavor and nutrition. They are packed with vitamins, particularly vitamin C and vitamin K, as well as dietary fiber. Blueberries are celebrated for their potential health benefits, including promoting heart health and cognitive function. Their versatility and vibrant flavor make them a popular ingredient in a variety of culinary creations.',
                    img: require('../images/blueberry.png'),
                    bgColor: '#e5e4ff',
                    height: 220,
                    imgHeight: 105
                },
                {
                    id: 4,
                    name: 'Dragon Fruit',
                    price: 5.36,
                    weight: 'Average 0.87 lb',
                    desc: 'Dragon fruit is not only visually appealing but also nutritious. It is a good source of vitamin C, fiber, and various antioxidants, which can contribute to overall health. Dragon fruit can be enjoyed fresh, either scooped out with a spoon or added to fruit salads, smoothie bowls, or desserts. Its unique appearance and taste make it a popular choice for adding a tropical touch to culinary dishes and beverages.',
                    img: require('../images/dragonfruit.png'),
                    bgColor: '#ffeefe',
                    height: 220,
                    imgHeight: 95
                },
                {
                    id: 5,
                    name: 'Lychee',
                    price: '8.22 per lb',
                    weight: '1 lb',
                    desc: 'Lychee has a delightful, sweet taste with floral undertones, often described as a combination of grape and rose. Its commonly enjoyed fresh as a refreshing snack or used in fruit salads, desserts, and beverages. Lychees are rich in vitamin C and offer several health benefits due to their antioxidant content. Their distinctive flavor and texture make them a sought-after ingredient in both culinary and culinary creations, particularly in Asian cuisine.',
                    img: require('../images/lychee.png'),
                    bgColor: '#d9fed0',
                    height: 220,
                    imgHeight: 105
                },
                {
                    id: 6,
                    name: 'Mango',
                    price: '1.01 each',
                    weight: '',
                    desc: 'Mangoes are enjoyed fresh by peeling away the skin and cutting the flesh away from the large, flat seed in the center. They can be eaten on their own, added to fruit salads, blended into smoothies, or used in a wide range of dishes, including salsas, chutneys, and desserts. Mangoes are a good source of vitamins A and C, as well as dietary fiber. Their versatility, delicious taste, and nutritional benefits make them a beloved fruit worldwide.',
                    img: require('../images/mango.png'),
                    bgColor: '#fee18e',
                    height: 220,
                    imgHeight: 95
                },
            ]);
        }
        else
        {
            let tempList = fruits.filter(fruit => {
                return fruit.name.toLocaleLowerCase().indexOf(enteredValue.toLocaleLowerCase()) > -1;
            })
            setFruits(tempList);
        }
    }
    function RenderCard(itemData) {
        return (
            <Pressable style={[styles.card, { backgroundColor: itemData.item.bgColor, height: itemData.item.height }]} onPress={()=>{navigation.navigate('ProductScreen', {...itemData.item})}}>
                <Text style={styles.name}>{itemData.item.name}</Text>
                {itemData.item.weight.length != 0 && <Text style={styles.weight}>{itemData.item.weight}</Text>}
                <Text style={styles.price}>${itemData.item.price}</Text>
                <Image source={itemData.item.img} style={{ width: '100%', height: itemData.item.imgHeight, position: 'absolute', left: 16, bottom: 16 }} />
            </Pressable>
        )
    }
  return (
    <View style={styles.container}>
            <Text style={styles.header}>Fruits and berries</Text>
            <View style={styles.searchBox}>
                <Feather name="search" size={24} color="black" />
                <TextInput placeholder='Search...' style={styles.inputBox} name='search' value={query} onChangeText={txt => handleInput(txt)} autoCapitalize="none" autoCorrect={false}/>
            </View>
            <FlatList data={fruits} keyExtractor={(item) => item.id} renderItem={RenderCard} style={styles.grid} numColumns={2} />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefeff',
        paddingTop: 100,
        paddingHorizontal: 32,

    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    card: {
        padding: 16,
        borderRadius: 20,
        width: '45%',
        margin: 8
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 8
    },
    price: {
        fontWeight: 'bold',
        marginTop: 8
    },
    grid: {
        flex: 1,
        width: '100%',
    },
    searchBox: {
        backgroundColor: '#f9f8f9',
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row',
        marginBottom: 16
    },
    inputBox: {
        width: '100%',
        marginLeft: 16
    }
})

export default ProductsScreen