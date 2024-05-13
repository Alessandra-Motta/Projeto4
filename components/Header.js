import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

export default function Header()
{
    return(
        <View 
        style={{
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
            width: 500      
            }}>
        
        <Image
        source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/033/494/202/small_2x/cute-chibi-panda-clipart-ai-generative-png.png"}}
        style={{width: 200, height: 200, alignItems: 'center'}}
        />
        </View>
    )
}