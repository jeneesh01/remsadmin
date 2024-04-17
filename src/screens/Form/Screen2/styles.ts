import { StyleSheet } from "react-native";
import { colors } from "../../../util/constant/colors";

export const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.BackgroundColor
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 40,
      },
})