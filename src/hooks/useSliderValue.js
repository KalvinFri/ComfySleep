import { useState } from "react"

export default function useSliderValue() {
    const [sliderValue, setSliderValue] = useState(1)

    return{ sliderValue, setSliderValue };
}