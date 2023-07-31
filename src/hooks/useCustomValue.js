import { useState } from "react"

export default function useCustomValue() {
    const [customValue, setCustomValue] = useState(null)

    return{
        customValue,
        setCustomValue
    }
}