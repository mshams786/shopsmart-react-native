import React from 'react'
import { View , Image, KeyboardAvoidingView} from 'react-native'
import ListItem from '../components/utils/ListItem/listItem'
import ListView from '../components/utils/ListView/listView'
import MonthlyListItems from '../components/Monthly-list-items/monthlyListItems'
import SearchInput from '../components/utils/search-input/searchInput'
import { ImageIcon, MonthlyListWrapper, SearchStyle, SearchWrapper } from './PagesStyle/monthlyInvertorypage-style'
import { Svg } from 'react-native-svg'

export default function MonthlyInventoryPage() {

  return (
 <KeyboardAvoidingView>
     <View  >
        <SearchWrapper>
          <SearchStyle>
            <SearchInput placeholder={'Search your item list' } width={'80%'}/>
          </SearchStyle>
          <ImageIcon>
            <Image source={require('../assets/images/Edit.jpg')}/>
            <Image source={require('../assets/images/grid-icon.jpg')}/>
          </ImageIcon>
        </SearchWrapper>
      <MonthlyListWrapper>
      <MonthlyListItems/>
      </MonthlyListWrapper>

    </View>
 </KeyboardAvoidingView>
  )
}
