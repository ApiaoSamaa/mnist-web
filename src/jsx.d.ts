// https://github.com/type-challenges/type-challenges
// MIT License
// Copyright (c) 2020 Anthony Fu <https://github.com/antfu>
// see https://github.com/type-challenges/type-challenges/blob/master/LICENSE

type Equal<A, B, T = true, F = false> =
  (<P>() => P extends A ? 1 : 2) extends
  (<P>() => P extends B ? 1 : 2) ? T : F

type ReadonlyKeys<T extends {}> = {
  [K in keyof T]-?: Equal<{ -readonly [KK in K]-?: T[K] }, { [KK in K]-?: T[K] }, never, K>
}[keyof T]

type AssignableParts<T extends {}> = Omit<T, ReadonlyKeys<T>>

type Extras = {
  children: JSX.Child
  style: Partial<CSSStyleDeclaration>
}

type MapIntrinsicElements<T> = {
  [K in keyof T]: Partial<AssignableParts<T[K]> & Extras>
}

declare global {
  namespace JSX {
    type Child = Child[] | Node | string | number | undefined | null | false
    type IntrinsicElements = MapIntrinsicElements<HTMLElementTagNameMap>
    type Element = any
    type ElementClass = never
    interface ElementChildrenAttribute { children: {} }
  }
}

export function createElement<K extends keyof HTMLElementTagNameMap, Element = HTMLElementTagNameMap[K]>
  (tagName: K, props: Partial<Element>, ...children: JSX.Child[]): Element
export function createElement<Props>(Component: (props?: Props) => JSX.Element, props: Props, ...children: JSX.Child[]): Element

