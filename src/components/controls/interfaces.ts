export interface FormControl<Value> {
    label?: string
    name: string
    onChange(value: Value): void
}
