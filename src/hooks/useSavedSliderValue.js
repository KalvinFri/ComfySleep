import { useState } from "react"

export default function useSavedSliderValue() {
    const [savedSliderValue, setSavedSliderValue] = useState(0);

    return{ savedSliderValue, setSavedSliderValue }
}