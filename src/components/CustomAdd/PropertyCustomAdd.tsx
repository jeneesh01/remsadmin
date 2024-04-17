// import {View, Text, Image, Animated} from 'react-native';
// import React, {memo, useRef} from 'react';
// import ActionButton from 'react-native-action-button';
// import {colors} from '../../util/constant/colors';
// import {images} from '../../util/constant/images';
// import {useNavigation} from '@react-navigation/native';
// import {navigationProp} from '../../@types/navigation';

// const PropertyCustomAdd = () => {
//   const navigation = useNavigation<navigationProp>();
//   const onButtonPress = (screen: string) => {
//     // Add logic for button press here
//   };

//   return (
//     <ActionButton
//       style={{}}
//       buttonColor={colors.primary}
//       onPress={() => {
//         console.log('hi');
//       }}>
//       <ActionButton.Item
//         shadowStyle={{}}
//         buttonColor={colors.Broker}
//         textStyle={{color: colors.black}}
//         textContainerStyle={{backgroundColor: colors.Broker}}
//         title="Broker"
//         onPress={() => onButtonPress('Broker')}>
//         <Image source={images.Broker} style={{height: 20, width: 20}} />
//       </ActionButton.Item>

//       <ActionButton.Item
//         shadowStyle={{}}
//         textStyle={{color: colors.black}}
//         textContainerStyle={{backgroundColor: colors.Income}}
//         buttonColor={colors.Income}
//         title="Income"
//         onPress={() => onButtonPress('Income')}>
//         <Image source={images.Income} style={{height: 20, width: 20}} />
//       </ActionButton.Item>
//       <ActionButton.Item
//         shadowStyle={{}}
//         textStyle={{color: colors.black}}
//         textContainerStyle={{backgroundColor: colors.Expense}}
//         buttonColor={colors.Expense}
//         title="Expense"
//         onPress={() => onButtonPress('Expence')}>
//         <Image source={images.Expense} style={{height: 20, width: 20}} />
//       </ActionButton.Item>
//       <ActionButton.Item
//         shadowStyle={{}}
//         textStyle={{color: colors.black}}
//         textContainerStyle={{backgroundColor: colors.purchaseAmount}}
//         buttonColor={colors.purchaseAmount}
//         title="Purchase Amount"
//         onPress={() => onButtonPress('Purchase Amount')}>
//         <Image source={images.PurchaseAmount} style={{height: 20, width: 20}} />
//       </ActionButton.Item>
//       <ActionButton.Item
//         shadowStyle={{}}
//         textStyle={{color: colors.black}}
//         textContainerStyle={{backgroundColor: colors.seller}}
//         buttonColor={colors.seller}
//         title="Seller"
//         onPress={() => onButtonPress('Seller')}>
//         <Image source={images.Seller} style={{height: 20, width: 20}} />
//       </ActionButton.Item>
//     </ActionButton>
//   );
// };

// export default memo(PropertyCustomAdd);
