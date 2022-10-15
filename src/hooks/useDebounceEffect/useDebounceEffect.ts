import { DependencyList, EffectCallback, useCallback, useEffect, useRef } from 'react'

export function useDebounceEffect(effect: EffectCallback, deps: DependencyList = [], wait = 500) {
  const cleanUp = useRef<void | (() => void)>()
  const effectRef = useRef<EffectCallback>(useCallback(effect, deps))

  useEffect(() => {
    const timeout = setTimeout(() => {
      cleanUp.current = effectRef?.current?.()
    }, wait)
    return () => clearTimeout(timeout)
  }, deps)

  useEffect(
    () => () => {
      if (typeof cleanUp?.current === 'function') {
        cleanUp.current()
      }
    },
    [],
  )
}
