export enum TodoKind {
    CREATE_TODO = "CREATE_TODO",
    EDIT_TODO = "EDIT_TODO",
    DELETE_TODO = "DELETE_TODO"
}

export interface TodoAction {
    type: TodoKind,
    payload: TodoState
}

export interface TodoState {
    title: string
    description: string
    type: string
    createdDate: string
    finishedDate: string
    status: string
}
function getCreatedDate() {
    const newDate = new Date
    const date = newDate.getDate
    const month = newDate.getMonth
    const year = newDate.getFullYear
    return `${date} ${month} ${year}`
}
export function todoReducer(state: TodoState, action: TodoAction) {
    const { type, payload } = action;
    switch (type) {
        case TodoKind.CREATE_TODO:
            return {
                ...payload,
                status: "Todo",
                createdDate: getCreatedDate()
            }
        case TodoKind.DELETE_TODO:
            return {
                ...state
            }
        case TodoKind.EDIT_TODO:
            return {
                ...state
            }
    }
}