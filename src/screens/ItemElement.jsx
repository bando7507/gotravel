import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'



const ItemElement = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useEffect(() =>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  return (
    <SafeAreaView className='flex-1 bg-white relative'>
      <ScrollView className='flex-1 px-4 py-6'>
        <View className='relative bg-white shadow-lg'>
          <Image 
          source={{
            uri: data?.photo?.images?.medium?.url ? data?.photo?.images?.medium?.url : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'
          }}
          className='w-full h-64 object-cover rounded-2xl'
          />
          <View className='absolute flex-row inset-x-0 top-5 justify-between px-4'>
            <TouchableOpacity 
            className='w-12 h-12 bg-white rounded-md items-start justify-center'
            onPress={() => navigation.navigate('Discover')}>
              <Image 
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2722/2722991.png'
              }}
              className='w-full h-5'
              
              />
            </TouchableOpacity>
            <TouchableOpacity className='w-12 h-12 bg-[#2c7378] rounded-md items-start justify-center'>
              <Image 
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/4024/4024512.png'
                }}
                className='w-full h-full object-cover'
                />
            </TouchableOpacity>
          </View>

          <View className='absolute flex-row bottom-5 justify-between inset-x-0 px-6 items-center'>
            <View className='flex-row space-x-2 items-center'>
              <Text className='text-[12px] font-bold text-gray-100'>
                {data.rating}
              </Text>
              <Text className='text-[32px] font-bold text-gray-100'>
                {data.ranking_position}
              </Text>
            </View>
            <View className='px-2 py-1 rounded-md bg-teal-100'>
              <Text>Closed Now</Text>
            </View>
          </View>
        </View>

        <View className='mt-6'>
          <Text className='text-[#428288] text-[24px] font-bold'>
            {data.name}
          </Text>
          <View className='flex-row items-center space-x-2 mt-2'>
            <Image 
            source={{
              uri:'https://cdn-icons-png.flaticon.com/512/484/484167.png'
            }}
            className='w-4 h-4'
            />
            <Text className='text-[#8C9EA6] text-[20px] font-bold'>
              {data.location_string}
            </Text>
          </View>
        </View>

        <View className='flex-row items-center justify-between mt-3'>
          {data.rating && (
            <View className='flex-row items-center space-x-2'>
              <View className='w-12 h-12 rounded-md items-center justify-center bg-red-300 '>
                <Image 
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2893/2893811.png'
                }}
                className='w-10 h-10'
                /> 
              </View>
              <View>
                <Text className='text-[#8C9EA6]'>
                  {data.rating}
                </Text>
                <Text className='text-[#8C9EA6]'>
                  Rating
                </Text>
              </View>
            </View>
          )}

            <View className='flex-row items-center space-x-2'>
              <View className='w-12 h-12 rounded-md items-center justify-center bg-red-300 '>
                <Image 
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/991/991952.png'
                }}
                className='w-10 h-10'
                /> 
              </View>
              <View>
                <Text className='text-[#8C9EA6]'>
                  $$$
                </Text>
                <Text className='text-[#8C9EA6]'>
                  Level price
                </Text>
              </View>
            </View>

            <View className='flex-row items-center space-x-2'>
              <View className='w-12 h-12 rounded-md items-center justify-center bg-red-300 '>
                <Image 
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/523/523280.png'
                }}
                className='w-10 h-10'
                /> 
              </View>
              <View>
                <Text className='text-[#8C9EA6]'>
                  {data.bearing}
                </Text>
                <Text className='text-[#8C9EA6]'>
                  Bearing
                </Text>
              </View>
            </View>
        </View>

        <Text className='mt-4 tracking-wide text-[16px] font-semibold text-[#97a6af]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse maiores hic perspiciatis, totam libero quas, nulla iste, perferendis explicabo ut sit impedit recusandae repellendus. Repellendus quas corporis asperiores minima iure.
        </Text>

        {data.cuisine && (
          <View className='flex-row items-center gap-2 justify-start flex-wrap mt-4' >
            {data.cuisine.map((n, id) =>(
              <TouchableOpacity 
              className='px-2 py-1 rounded-md bg-emerald-200'
              key={id}
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )
        }

        <View className='bg-gray-100 space-y-2 rounded-md px-4 py-2 mt-4'>
          {data.phone && (
            <View className='flex-row items-start space-x-6'>
              <Image 
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/597/597177.png'
                }}
                className='w-7 h-7'
                /> 
              <Text className='text-lg'>
                {data.phone}
              </Text>
            </View>
          )}
          
          {data.address && (
            <View className='flex-row items-start space-x-6'>
              <Image 
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/484/484167.png'
                }}
                className='w-7 h-7'
                /> 
              <Text className='text-lg'>
                {data.address}
              </Text>
            </View>
          )}
        <View className='mt-4 bg-[#428288] px-4 py-4 items-center justify-center mb-12 rounded-lg'>
          <Text className='uppercase text-3xl font-semibold tracking-wide text-gray-100'>
            Book Now
          </Text>
        </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ItemElement