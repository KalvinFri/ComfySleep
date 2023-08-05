import { useState } from "react"

export default function useSliderValue() {
    const [sliderValue, setSliderValue] = useState(0)

    return{ sliderValue, setSliderValue };
}