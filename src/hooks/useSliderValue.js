import { useState } from "react"

export default function useSliderValue() {
    const [sliderValue, setSliderValue] = useState(5)

    return{ sliderValue, setSliderValue };
}