import { Input } from ".";

const renderFields = ({
  values,
  errors,
  handleChange,
  isSubmitting,
  name,
  type,
  inputType,
  label,
  optionData,
}) => {
  return (
    <Input
      name={name}
      value={values?.[name]}
      error={errors?.[name]}
      label={label}
      type={type}
      isSubmitting={isSubmitting}
      handleChange={handleChange}
    />
  );
};

export const RenderForm = ({
  values,
  errors,
  handleChange,
  isSubmitting,
  formFieldsData,
}) => {
  return formFieldsData.map(({ name, label, type, inputType, optionData }) =>
    renderFields({
      values,
      errors,
      handleChange,
      isSubmitting,
      name,
      type,
      inputType,
      label,
      optionData,
    })
  );
};
