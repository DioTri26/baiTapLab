import { FlatList, Text, StyleSheet, Image } from "react-native";

export default function ProductList (props){
    const productList = [
        {id: 1, name: 'Dương Minh Trí', moTa: 'vip pro'},
        {id: 2, name: 'Trí Minh Dương', moTa: 'vũ trụ'},
    ];

    return (
        <FlatList 
        data={productList}

        //item là giao diện trả về sau mỗi vòng lặp
        renderItem={({item}) => (
            <>
            <Image 
            style={styles.tinyLogo}
            source={{uri: 'https://i.pinimg.com/564x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg'}}
            />
            <Text style = {styles.text}> Tên : {item.name}</Text>
            <Text> Mô tả: {item.moTa}</Text>
            </>
        )}

        // key là giá trị duy nhất trả về sau mỗi vòng lặp
        keyExtractor={(item) => item.id}
    />
  )
};

const styles = StyleSheet.create({
    tinyLogo: {
        width: 30,
        height: 30,
      },
});