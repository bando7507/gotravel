import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MenuConatiner = ({imgSrc, title, type, setType, }) => {

  const handleChange =() => {
    setType(title.toLowerCase())
  }

  return (
      <TouchableOpacity 
      className='justify-center items-center space-y-3' 
      onPress={() => {
        handleChange
      }}>
      <View className={`w-20 h-20 items-center rounded-full justify-center p-2 
      ${type === title.toLowerCase() ? 'bg-gray-200' : ''}
      `}>
        <Image 
        source={imgSrc}
        className='w-full h-full object-cover'
        />
      </View>
      <Text className='text-[#00bcc9] text-xl font-semibold'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default MenuConatiner