import React from 'react'
import { View } from 'react-native'
import ListItem from '../components/utils/ListItem/listItem'
import ListView from '../components/utils/ListView/listView'
import MonthlyListItem from '../components/Monthly-list-items/monthlyListItem'
import SearchInput from '../components/utils/search-input/searchInput'

export default function MonthlyInventoryPage() {

  return (
    <View>
      <View style={{marginTop:30 , display:'flex', left:40}}>
        <SearchInput placeholder="Search your monthly list" width="60%" />
      </View>
      <View style={{marginTop:40}}>
      <MonthlyListItem/>
      </View>

    </View>
  )
}
