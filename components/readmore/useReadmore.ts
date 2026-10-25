import { useCallback, useEffect, useRef, useState } from "react";

export interface ReadMoreProps {
    text: string;
    status?: string;
    lines?: number;
    className?: string;
    moreLabel?: string;
    lessLabel?: string;
}

export default function useReadmore(text: string, lines: number = 2) {

    const textRef = useRef<HTMLParagraphElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const checkOverflow = useCallback(() => {
        const element = textRef.current;
        if (!element) return;
        const hasOverflow =element.scrollHeight > element.clientHeight;
        setIsOverflowing(hasOverflow);
    }, []);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;
        // const observer = new ResizeObserver(checkOverflow);
        // observer.observe(element);
        checkOverflow();
        // return () => observer.disconnect();
    }, [checkOverflow, text, lines]);

    useEffect(() => {
        setExpanded(false);
    }, [text, lines]);

    return {
        textRef,
        expanded,
        setExpanded,
        isOverflowing,
    }
}