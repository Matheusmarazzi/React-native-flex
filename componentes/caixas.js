import react from 'react';
import { View} from 'react-native';


export default function(props){
    return(
        <View style={{width:'100%',height:300,flexDirection:'column',alignItems:'stretch',justifyContent:'center',flexWrap:'wrap'}}>
            <View style={{flexGrow:1,backgroundColor:'#00f'}}></View>
            <View style={{flexGrow:2,backgroundColor:'#00a'}}></View>
            <View style={{flexGrow:3,backgroundColor:'#005'}}></View>
            <View style={{flexGrow:4,backgroundColor:'#0f0'}}></View>
            <View style={{flexGrow:5,backgroundColor:'#0a0'}}></View>
            <View style={{flexGrow:6,backgroundColor:'#050'}}></View>
            <View style={{flexGrow:7,backgroundColor:'#f00'}}></View>
            <View style={{flexGrow:8,backgroundColor:'#a00'}}></View>
            <View style={{flexGrow:9,backgroundColor:'#500'}}></View>
        </View>
    )
}