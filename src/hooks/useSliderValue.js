import { useState } from "react"

export default function useSliderValue() {
    const [sliderValue, setSliderValue] = useState(50)

    return{ sliderValue, setSliderValue };
}