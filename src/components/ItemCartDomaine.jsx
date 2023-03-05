import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ItemCartDomaine = ({imgScr, title, localisation, data}) => {

  const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("ItemElement", {param: data})}

    className="rounded-md border border-gray-300 bg-white shadow-md w-[182px] space-y-3 px-3 py-2 my-2">
      <Image
      source={{uri : imgScr}}
      className='w-full h-40 rounded-md object-cover' 
      /> 
       {title ? 
        (<>
          <Text className="text-[#428288] text-[18px] font-bold">
            {title}
          </Text>

          <Text className="text-[#428288] text-[18px] font-bold">
            {localisation}
          </Text>
        </>) : (
          <></>
        )
      }      
    </TouchableOpacity>
  )
}

export default ItemCartDomaine