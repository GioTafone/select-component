export type SelectOption ={
    label: string
    value: string
}

export type SelectProps ={
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void 
}