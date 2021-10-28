export default function validateEnumProp({
  componentName,
  enumValues,
  propName,
  value,
}) {
  if (value && !enumValues.includes(value)) {
    // eslint-disable-next-line no-console
    console.error(
      `${componentName}: Bad value "${value}". The ${propName} prop must be one of the following:`,
      String(enumValues),
    );
  }
}
