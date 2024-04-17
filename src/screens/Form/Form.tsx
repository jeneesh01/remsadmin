import { View, Text, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'
import FormHeader from '../../components/CustomFormHeader/FormHeader'
import { useAppSelector } from '../../redux/app/store'
import Navigator from './Navigator'

const Form = () => {
  const header = useAppSelector(state => state.form.header);

  return (
    <View style={styles.container}>
        <SafeAreaView  style={{backgroundColor:colors.BackgroundColor}}/>
        <FormHeader type={header} />
        <Navigator />
    </View>
  )
}

export default memo(Form)
