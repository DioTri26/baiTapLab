import {Text, StyleSheet, Image} from 'react-native';
// Trong 1 file chỉ 1 function được export dạng default
// Nếu export default thì khi import không cần {}
// Nếu export không default thì bắt buộc có {} và đúng tên
export function ProductImage (props) {
    return (
       
        <Image
            style={styles.image}
            source={{uri: 'https://i1-dulich.vnecdn.net/2020/06/25/Best-Milky-Way-photo-Tenerife-1024x930-1593071201.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=aUTZPvW6XqWAglodS-T6Xw'}}
        />
        
    );
}
export function ProductImage2 (props){
    return (
        <Image
        style={styles.image}
            source={{uri: 'https://i1-dulich.vnecdn.net/2020/06/25/Best-Milky-Way-photo-Canon-Eos-Ra-1593078766.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=wQcgmsZOuPPMkqIAY5VsbQ'}}
        />
    )
}

// export default function ProductText ({name}) {
export default function ProductText (props) {
    // props là 1 obj truyền từ cha sang
    // ở đây cần có 1 key tên là name
    const name = props.name;
    const desc = props.desc;

    return (
        // <Text style={styles.text}>{props.name}</Text>
        <>
            <Text style={styles.text}>{name}</Text>
            <Text>{desc ? desc : 'Updating...'}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontStyle: 'italic',
        color: 'orange',
    },
    image: {
        width: 100,
        height: 100,
        marginLeft : 20,
        marginTop :30,
        borderRadius: 200 / 2,
       
    }
});
