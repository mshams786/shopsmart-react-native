import React from 'react'
import { View } from 'react-native'
import ListItem from '../components/utils/ListItem/listItem'
import ListView from '../components/utils/ListView/listView'
import MonthlyListItem from '../components/Monthly-list-items/monthlyListItem'
import SearchInput from '../components/utils/search-input/searchInput'

export default function MonthlyInventoryPage() {
   
  return (
    <View>
    <SearchInput placeholder="Search Items" width="90%"/>
      <MonthlyListItem/>
      
    </View>
  )
}
