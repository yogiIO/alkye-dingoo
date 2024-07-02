import { useMemo, useState } from "react"

export default function useWindowDimension() {
    const [windowWidth, setWindowWidth] = useState()
    useMemo(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
        setWindowWidth(window.innerWidth)
    }, [])
    return windowWidth
}
