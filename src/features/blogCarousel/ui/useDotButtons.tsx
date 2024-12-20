import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState
} from 'react'

type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
}
import {EmblaCarouselType} from 'embla-carousel'

export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([...Array(3)])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}

type PropType = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>

export const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <button type="button" {...restProps}>
            {children}
        </button>
    )
}