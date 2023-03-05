import { View, 
  Text,
  SafeAreaView, 
  Image, 
  ScrollView,
  TouchableOpacity, 
  ActivityIndicator} from 'react-native'

  import { Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Attactions, Avatar, Hotels, NotFound, Restaurants } from '../assets'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MenuConatiner from '../components/MenuConatiner'
import ItemCartDomaine from '../components/ItemCartDomaine'
import { getPlaceData } from '../api'



export default function Discover({ navigation }) {

  const {Width, Height} = Dimensions.get('window')

  const [type, setType] = useState('restaurants')
  const [isVisible, setIsVisible] = useState(false)
  const [mainData, setMainData] = useState([])

  const nav = useNavigation()
  useEffect(() =>{
    setIsVisible(false)

    getPlaceData()
      .then(response => response.json())
      .then(response => setMainData(response.data))
      .catch(err => console.error(err));
      
    setInterval(() => {
      setIsVisible(true)
    }, 2000)

    nav.setOptions({
      headerShown: false
    })
  }, [])

  console.log(mainData);
  return (
    <SafeAreaView className='flex-1 bg-white relative'>
      <View className='flex-row items-center justify-between px-6'>
        <View>
          <Text className='text-[40px] text-[#0b6468] font-bold'>Discover</Text>
          <Text className='text-[33px] text-[#527283]'>the beauty to day</Text>
        </View>

        <View className='w-12 h-12 bg-gray-400 items-center justify-center rounded-md shadow-lg '>
          <Image
          source={Avatar}
          className='w-full h-full object-cover rounded-md'
          />
        </View>
      </View>

        <View className='flex-row items-center bg-white shadow-lg px-4 mx-4 py-2 rounded-xl'>
          <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyBgk455EY2kw0VzNOJlVRYLmDuAhtaRCQM',
              language: 'en',
            }}
          />
        </View>

        {!isVisible ? (
          <View className='flex-1 items-center justify-center'>
            <ActivityIndicator />
          </View>
        ) : (
          <ScrollView>
            <View className='flex-row items-center justify-between px-8 mt-8'>
              <MenuConatiner 
              key={'hotel'}
              title='Hotels'
              imgSrc={Hotels}
              type={type}
              setType={setType}
              />
              <MenuConatiner 
              key={'attraction'}
              title='Attraction'
              imgSrc={Attactions}
              type={type}
              setType={setType}
              />
              <MenuConatiner 
              key={'restaurants'}
              title='Restaurants'
              imgSrc={Restaurants}
              type={type}
              setType={setType}
              />
            </View>

            <View className='flex-row justify-between items-center mt-8 px-4'>
              <Text className='text-[#2c7378] text-[28px] font-bold'>Top Tip</Text>
              <TouchableOpacity>
                <Text>
                  Explore
                </Text>
              </TouchableOpacity>
            </View>

             {mainData.length > 0 ? (
              <View className='flex-row items-center justify-between flex-wrap mt-8 px-4'>
                {mainData.map(item =>(
                  <>
                    <ItemCartDomaine
                    key={item.location_id}
                    imgScr={item?.photo?.images?.medium?.url ? item?.photo?.images?.medium?.url : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'}
                    title={item?.name}
                    localisation={item.location_string}
                    data={item}
                    />

                  </>
                ))

                }
              </View>
            ) : (
              <View className={`w-${Width} h-[400px] items-center justify-center space-y-6`}
              >
               <Image 
                source={NotFound}
                className='w-24 h-24 object-cover'
                />
                <Text className='text-2xl text-[#428288] font-semibold mb-12'>
                  Opps... No Data Found  
                </Text>
              </View>
            )} 
          </ScrollView>
        )}
    </SafeAreaView>
  )
}