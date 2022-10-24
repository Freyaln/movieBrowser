import {DatasDetail} from "../DataLists/Interface";
import {useEffect, useRef, useState} from "react";


export function twoDigits(input: number) {
    return input.toString().padStart(2, '0')
}
export function minToHours(input: number) {
    const min = input % 60;
    const hours = Math.floor(input / 60);

    return `${twoDigits(hours)}h${twoDigits(min)}`;
}

export function getRandomId(list: DatasDetail[]) {
    const listItem = list[Math.floor(Math.random() * list.length)]
    const id = listItem.id;
    return id
}

export function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}