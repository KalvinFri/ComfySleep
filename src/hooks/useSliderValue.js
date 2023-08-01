import { useState } from "react"

export default function useSliderValue(props) {


    const [sliderValue, setSliderValue] = useState(15)

    return{ sliderValue, setSliderValue };
}