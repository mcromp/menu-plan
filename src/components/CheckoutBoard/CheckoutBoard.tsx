import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { MenuItem } from '../../redux/menuList/menuList';
import { CalendarMenuItem } from '../Day/index'

export interface CheckoutBoardItemProps {
  item: CalendarMenuItem;
  modifyQuantityOfCheckoutBoardItem: (item: CalendarMenuItem, amount: number) => void;
}



const CheckoutBoardItem: React.FC<CheckoutBoardItemProps> = ({
  item, modifyQuantityOfCheckoutBoardItem
}) => {
  const dispatch = useDispatch()
  const menuList = useSelector<RootState, MenuItem[]>(state => state.menuList.data)
  const [name, setName] = useState<string>("")
  const [itemState, setItemState] = useState<CalendarMenuItem>(item)

  useEffect(() => {
    const findName = menuList.find(i => i.ID === item.foodId)
    if (findName) setName(findName?.ITEM)
  }, [menuList, item.foodId])

  return (
    <>
      <span>{name}</span>
      <span>{itemState.quantity}</span>
      {/* <button onClick={() => dispatch(removeCalendarItemById(calendarItem.id))}>Remove Item</button> */}
      <button onClick={() => modifyQuantityOfCheckoutBoardItem(item, 1)}>+1</button>
      <button onClick={() => modifyQuantityOfCheckoutBoardItem(item, -1)}>-1</button>
    </>
  )
};

export default CheckoutBoardItem