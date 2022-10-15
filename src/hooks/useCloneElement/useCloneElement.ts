import { cloneElement, FC, isValidElement, ReactElement, ReactNode, useMemo } from 'react'

export interface IUseCloneElement {
  props?: object
  element: ReactNode | FC
  beforePrevProps?: object
}

export function useCloneElement({ element, props = {} }: IUseCloneElement) {
  const Elem = element as ReactElement
  const isValid = useMemo(() => isValidElement(Elem), [Elem])
  const cloneProps = useMemo(() => ({ ...Elem?.props, ...props }), [Elem?.props, props])
  const cloneElmnt = isValid ? cloneElement(Elem, cloneProps) : Elem
  return useMemo(
    () => ({ cloneElement: cloneElmnt, cloneProps, isValidElement: isValid }),
    [cloneElmnt, cloneProps, isValid],
  )
}
