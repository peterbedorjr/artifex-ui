import is from '.../utils/is';

import validateEnumProp from '../utils/validate-enum-props';

export default (validatorMap) => ({
  created() {
    forEach(Object.keys(this.$props), (propName) => {
      const validator = validatorMap && validatorMap[propName];

      if (!validator) return;

      if (isArray(validator)) {
        validateEnumProp({
          componentName: this.$options._componentTag,
          enumValues: validator,
          propName,
          value: this[propName],
        });
      }

      if (isFunction(validator)) {
        validator(this[propName]);
      }

      this.$watch(propName, (newValue, oldValue) => {
        if (isArray(validator)) {
          validateEnumProp({
            componentName: this.$options._componentTag,
            enumValues: validator,
            propName,
            value: newValue,
          });
        }

        if (isFunction(validator)) {
          validator(newValue, oldValue);
        }
      });
    });
  },
});
