import { useState } from "react"

export default function useCustomValue() {
    const [customValue, setCustomValue] = useState(0)

    return{ customValue, setCustomValue }
}