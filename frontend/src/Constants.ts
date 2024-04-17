export type TodoType = {
    title: string;
    status: boolean;
}

export interface TodoTypeId extends TodoType {
    id: number
}
