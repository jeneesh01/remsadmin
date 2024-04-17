import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { memo, useState } from 'react'
import { styles } from './styles'
import { colors } from '../../util/constant/colors'
import HCustomAdd from '../../components/CustomAdd/HCustomAdd'
import Header from './Header/Header'
import { useNavigation } from '@react-navigation/native'
import { navigationProp } from '../../@types/navigation'
import { useAppDispatch, useAppSelector } from '../../redux/app/store'
import { emptyProperty } from '../../redux/action/form'
import Property from './Property/Property'
import { IPropertyDetail } from '../../@types/form'

const Home = () => {
  const propertyDetailList = useAppSelector((state)=>state.form.propertyDetailList);
  
  const useType = useAppSelector((state)=>state.auth?.userInfo);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const navigation = useNavigation<navigationProp>();
  const dispatch =useAppDispatch();
  const onAddIconPress=()=>{
    dispatch(emptyProperty())
    navigation.navigate('Form')
  }
  const loadMoreItems = async () => {
  
  };
  return (
    <View style={styles.container}>
        <SafeAreaView style={{backgroundColor:colors.primary}}/>
        <Header />
        {
          useType?.user_type!='Seller' && 
        <HCustomAdd viewStyle={{position:'absolute',bottom:50,right:40}} onPress={onAddIconPress} />
        }
        {
          propertyDetailList[0]?.property_name.length>0 ?
        <FlatList
            data={propertyDetailList}
            renderItem={({ item, index }: { item: IPropertyDetail; index: number }) => (
              <Property item={item} index={index}/>
            )}
            
            keyExtractor={item?._id +item?.property_name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 80, paddingTop: 20}}
            maxToRenderPerBatch={10}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={0.1}
            windowSize={5}
            disableVirtualization
            ListFooterComponent={<View style={{marginBottom: 30}} />}
          />:
          null
        }

    </View>
  )
}

export default memo(Home)