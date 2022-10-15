import { useCloneElement } from 'hooks/useCloneElement'
import { useHookFormProps } from 'hooks/useHookFormProps'

export type IInputCallback = (...e: any[]) => void
export type IGenerateInputProps = any

const cloneEventKeyList = ['onChange', 'onBlur', 'onSelect', 'onClick']

export function useInputProps(props: IGenerateInputProps) {
  const { hookFormProps = {}, ...inputProps } = props
  const { id, name, children, defaultValue } = inputProps
  const { field, error } = useHookFormProps({ name, defaultValue, ...hookFormProps })

  const $event = (key: string, event: IInputCallback, e: any, ...arg: any[]) => {
    event?.(e, ...arg)
    inputProps?.[key]?.(e, ...arg)
    ;(field as any)?.[key]?.(e, ...arg)
  }

  const clonedEvents = cloneEventKeyList.reduce((prev, key) => {
    prev[key] = (...arg: any[]) => ($event as any)(key, inputProps[key], ...arg)
    return prev
  }, {} as Record<string, any>)

  const { cloneElement, cloneProps } = useCloneElement({
    element: children,
    props: {
      ...inputProps,
      id: id ?? name,
      ...field,
      ...clonedEvents,
      error,
    },
  })

  return { inputElement: cloneElement, inputProps: cloneProps, error, clonedEvents }
}
