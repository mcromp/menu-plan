import React, { useState, useRef, useLayoutEffect } from "react";
import { FoodItem } from "../../types";


const SearchBar: React.FC<any> = ({ fooddata, calendar, addToCalendar }) => {
    const [textValue, setTextValue] = useState<string>("")
    const [searchListDisplay, setSearchListDisplay] = useState<FoodItem[]>([])
    const [showList, setShowList] = useState(true)
    const [errorText, setErrorText] = useState("")
    const wrapperRef = useRef<HTMLDivElement>(null)


    useLayoutEffect(() => {
        window.addEventListener("mousedown", handleClickOutside)
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = (event: MouseEvent): void => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) setShowList(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorText("")
        let word = e.target.value;
        setSearchListDisplay([])
        setTextValue(word)
        if (word.length > 0) {
            let XX = fooddata.reduce((acc: any, item: FoodItem) => {
                let i = item.ITEM.toLowerCase()
                let x = word.toLowerCase();
                if (i.includes(x)) acc.push(item)
                return acc
            }, [])
            XX = XX.splice(0, 5)
            setSearchListDisplay(XX)
        }
    }

    const handleClick = (item: FoodItem) => {
        setSearchListDisplay([])
        setTextValue("")
        const calendarCheck = calendar.map((xx: any) => xx.id)
        if (calendarCheck.includes(item.ID)) {

            setErrorText(`${item.ITEM} has already been added`)
            setTimeout(() => {
                setErrorText("")
            }, 1500);
        } else {
            addToCalendar(item.ID, 1)
        }
    }


    return (
        <div style={{ backgroundColor: "mediumpurple" }}>
            <div ref={wrapperRef} className="flex-container flex-column pos-rel">
                <input
                    onClick={() => setShowList(true)}
                    placeholder="Type to search"
                    value={textValue}
                    onChange={e => handleChange(e)}
                />
                {<sub>{errorText}</sub>}
                {showList && searchListDisplay.map(i =>
                    <div
                        onClick={() => handleClick(i)}
                        key={i.ID}
                        tabIndex={0}
                    >
                        <span>{i.ITEM}</span>
                    </div>)}
            </div>
        </div>
    );
};

export default SearchBar