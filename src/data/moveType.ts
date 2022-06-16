export interface Move {
    id: string,
    name: string,
    desc: string,
    class: string,
    availableAt: number,
    special: null
}

export function InitMove(options?:Partial<Move>): Move {
    const defaults = {
        id: '',
        name: '',
        desc: '',
        class: '',
        availableAt: 0,
        special: null
    }

    return{
        ...defaults,
        ...options
    }
}