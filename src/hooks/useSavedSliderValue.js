import { useState } from "react"

export default function useSavedSliderValue() {
    const [savedSliderValue, setSavedSliderValue] = useState(null)

    return{
        savedSliderValue,
        setSavedSliderValue
       
    }
}