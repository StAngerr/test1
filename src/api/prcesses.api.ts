import {data} from "./data";
import {Process} from "../types/prosesses";

export const getProcesses = (): Promise<Process[]> => {
    return new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, 300)
    });
}