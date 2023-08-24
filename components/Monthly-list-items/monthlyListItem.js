import React from 'react'
import ListView from '../utils/ListView/listView'
import monthlyListData from '../../DATA/Monthly_List'
import ListItem from '../utils/ListItem/listItem'

export default function monthlyListItem() {
console.log(monthlyListData)
  return (
   <ListView>
    {monthlyListData.map((item)=>{
         return(
            <ListItem 
            key={item.id}
            cover={item.url}
            heading={item.heading}
            paragraph={item.paragraph}
            date={item.date}
            svgIcon={item.icon}
            
            
        />
        );
    })}
    
   </ListView>
  )

}

