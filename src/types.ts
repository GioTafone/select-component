export type SelectOption ={
    label: string
    value: number
}

export type SelectProps ={
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void 
}