import { SelectOption } from '@school-diary/school-diary/domain';

export function getSelectOptions<T, K extends keyof T>(data: T[], propertiesForDescription: K[], propertyForValue: K, separator = ' '): SelectOption[] {
  return data.map((item: T) =>
    ({
      description: propertiesForDescription.map(key => item[key]).join(separator),
      value: item[propertyForValue]
    })
  );
}
