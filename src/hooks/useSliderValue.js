import { useState } from "react"

export default function useSliderValue(props) {


    const [sliderValue, setSliderValue] = useState(10)

    return{ sliderValue, setSliderValue };
}