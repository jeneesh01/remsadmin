import { View, Text, StyleSheet, GestureResponderEvent, ImageSourcePropType, KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, TextInput, TextInputSubmitEditingEventData, TextStyle, ViewStyle, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { colors } from '../../util/constant/colors';
import { images } from '../../util/constant/images';
import { SCREEN_WIDTH } from '../../util/constant/responsive';


type props={
    placeholder: string;
    value?: string;
    setValue?: (text: string) => void;
    keyboardType?: KeyboardTypeOptions | undefined;
    secureTextEntry?: boolean | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    containerstyle?: StyleProp<ViewStyle> | undefined;
    isPasseword?: boolean;
    numberOfLines?: number;
    mainStyle?: StyleProp<ViewStyle> | undefined;
    textinputStyle?: StyleProp<TextStyle> | undefined;
    placeholdeStyle?: StyleProp<TextStyle> | undefined;
    onSubmitEditing?:
      | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
      | undefined;
    setRef?: undefined | any;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    defaultValue?:string | undefined
  
}
const CustomTextInput = ({  placeholder,
    value,
    setValue,
    keyboardType,
    secureTextEntry,
    onPress,
    containerstyle,
    isPasseword,
    numberOfLines,
    mainStyle,
    textinputStyle,
    placeholdeStyle,
    onSubmitEditing,
    setRef,
    defaultValue,
    autoCapitalize,}:props) => {
  return (
    <View style={styles.textInputContainer}>
        
         <TextInput
            ref={setRef}
            placeholder={placeholder}
            placeholderTextColor={colors.white}
            style={[
              styles.textInput,
              {
                width:SCREEN_WIDTH/1.4,
              },
              textinputStyle,
            ]}
            value={value}
            defaultValue={defaultValue}
            autoCapitalize={autoCapitalize}
            onChangeText={setValue}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            cursorColor={colors.white}
            numberOfLines={numberOfLines}
            onSubmitEditing={onSubmitEditing}
          />
          {
            isPasseword && <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}onPress={onPress}><Image source={secureTextEntry?images.phide:images.pshow} style={{height:secureTextEntry?20:14,width:20,tintColor:colors.grey,marginRight:10}}/></TouchableOpacity>
          }
    </View>
  )
}

export default memo(CustomTextInput)
export const styles = StyleSheet.create({
textInput:{
    
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    color:colors.white,
    height:50,
    paddingLeft:5

   

},textInputContainer:{
    height:50,
    backgroundColor:'#ccbdf8',
    borderWidth:1,
    padding:15,
    borderColor:colors.white,
    marginHorizontal:20,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:15,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,


}
})