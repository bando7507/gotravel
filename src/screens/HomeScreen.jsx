import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'
import { Dimensions } from 'react-native'




const HomeScreen = ({ navigation }) => {

  const nav = useNavigation()

  const {width, height } = Dimensions.get('window')

  useEffect(() => {
    nav.setOptions({
      headerShown: false
    })
  },[])

  return (
    <SafeAreaView className="flex-1 bg-white relative">

      {/* firts section */}
      <View className="flex-row px-6 mt-3 space-x-2 items-center">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00bcc9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
      </View>

      
      {/* second section */}
      <View className="px-6 mt-5 space-y-2">
        <Text className="text-[#3c6072]3c6072 text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00bcc9] text-[35px]">Good Moments</Text>

        <Text className="text-[#3c6072] text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, voluptas.
        </Text>
      </View>

      {/** circles section */}
      <View className="w-[250px] h-[250px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-40">
      </View>
      <View className="w-[300px] h-[300px] bg-[#e99265] rounded-full absolute -bottom-28 -left-40">
      </View>

      {/** Image section */}
      <View className="flex-1 relative items-center justify-cente">
        <Image 
        source={HeroImage}
        className="w-full h-full object-cover mt-20"
        />

        <View className="absolute bottom-10 w-24 h-24 border-l-2 border-r-4 border-t-4 border-[#00bcc9] rounded-full items-center justify-center">
          <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          >
            <View className="w-20 h-20 rounded-full bg-[#00bcc9] items-center justify-center">
              <Text className="text-gray-200 text-[40px] font-semibold">
                Go
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen