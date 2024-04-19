import { View, Text, StyleSheet, GestureResponderEvent, ImageSourcePropType, KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, TextInput, TextInputSubmitEditingEventData, TextStyle, ViewStyle, Image, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'
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
    defaultValue?:string | undefined;
    editable?:boolean|undefined;
  
}
const HCustomTextInput = ({  placeholder,
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
    editable,
    autoCapitalize,}:props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

        const handleFocus = () => {
            setIsFocused(true);
          };
        
          const handleBlur = () => {
            setIsFocused(false);
          };
        
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.textInputContainer,{borderColor:isFocused?colors.primary:colors.white},containerstyle]}>
        
         <TextInput
            ref={setRef}
            placeholder={placeholder}
            placeholderTextColor={colors.black7}
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            editable={editable}
          />
    </TouchableOpacity>
  )
}

export default memo(HCustomTextInput)
export const styles = StyleSheet.create({
textInput:{
    
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    color:colors.black,
    height:50,
    paddingLeft:5

   

},textInputContainer:{
    height:50,
    backgroundColor:colors.DrawerHeader,
    borderWidth:1,
    padding:15,
    marginHorizontal:25,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:15,
    shadowColor: colors.black,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,


}
})