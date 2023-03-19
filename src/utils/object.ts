export const hasAllProperties = <T extends Record<string, any>>(
  obj: T, 
  propertyNames: (keyof T)[]
): boolean => {
  return propertyNames.every(name => name in obj)
}