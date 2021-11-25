/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

export function processCheckboxAndRadioAvailableValues(
  availableValues: Record<string, unknown>,
  type: string,
): { key: string, value: unknown }[] {
  if (!availableValues) {
    return [];
  }

  const flatValues = [];
  Object.entries(availableValues).forEach(([valueObjKey, value]) => {
    if (typeof value === 'object' && typeof value.key !== 'undefined') {
      flatValues.push(value);
      return;
    }

    let key: number|string = valueObjKey;
    if (type === 'integer' && typeof valueObjKey === 'string') {
      key = parseInt(key, 10);
    }

    flatValues.push({ key, value });
  });

  return flatValues;
}
