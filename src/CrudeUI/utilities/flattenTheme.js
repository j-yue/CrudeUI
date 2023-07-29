function isNested(objValue) {
  return typeof objValue === "object" && !Array.isArray(objValue);
}

export default function flattenTheme(theme, name = null) {
  let themeMap = {};

  for (const key in theme) {
    const keyName = name ? `${name}-${key}` : key;
    const currentValue = theme[key];

    // as long as value still nested, recursion
    if (isNested(currentValue)) {
      themeMap = { ...themeMap, ...flattenTheme(currentValue, keyName) };
    } else {
      themeMap[keyName] = currentValue;
    }
  }

  return themeMap;
}
