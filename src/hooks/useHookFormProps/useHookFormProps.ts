import {
  Control,
  ErrorOption,
  FieldValues,
  useController,
  UseControllerReturn,
} from 'react-hook-form'

export type IHookFormField = {
  key: string
  field: any
  name?: string
  index: number
  keyName: string
  parentData: any
  fieldName: string
  defaultValue?: any
  control: Control<any>
  setValue?: (name: string, value: unknown, config?: Record<string, unknown>) => void
}

export type IuseHookFormReturn = UseControllerReturn<FieldValues, any> & {
  error: ErrorOption
}

export function useHookFormProps(props: IHookFormField): IuseHookFormReturn {
  const { index = 0, defaultValue, control, name, fieldName, parentData } = props
  if (!control || !name) return {} as any
  const $defaultValue = fieldName ? parentData?.[name] : defaultValue
  const $name = fieldName ? `${fieldName}.${index}.${name}` : name
  const hookFormProps = useController({ control, name: $name, defaultValue: $defaultValue })
  const errors = hookFormProps?.formState?.errors as any
  return {
    ...hookFormProps,
    error: fieldName ? errors?.[fieldName]?.[index]?.[name] : errors?.[name],
  }
}
