export type SingleApiState = {
    status: number | null,
    data: any
}

export type ApiState = {
    isLoading: boolean,
    lastResponses: Record<string, SingleApiState> | null
}