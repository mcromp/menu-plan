import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setAlertMessage } from "../redux/modules/alertMessage";

const AlertText: React.FC<AlertTextProps> = ({ time = 1200 }) => {
  const alertMessage = useSelector<RootState, string>(state => state.alertMessage);
  const dispatch = useDispatch();

  const [text, setText] = useState<string>("")

  useEffect(() => {
    setText(alertMessage)
    let listener = setTimeout(() => {
      setText("")
      dispatch(setAlertMessage(""))
    }, time);
    return () => {
      clearTimeout(listener);
    }
  }, [alertMessage, setText, dispatch, time]);


  return (
    <>
      <p className={text ? "alert" : ""}>{text}</p>
    </>);
};

type AlertTextProps = {
  time?: number
};

export default AlertText;