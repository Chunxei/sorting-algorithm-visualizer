export interface ArrayEntry {
  key: number
  value: number
}

export interface ArraySorterReturnValues {
  array: ArrayEntry[]
  indexes: number[]
  annotation?: string
}

export interface AlgorithmInfo {
  description: string
  complexity: {
    time: string
    space: string
  }
  references: Array<{
    title: string
    link: string
  }>
}
