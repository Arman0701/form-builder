import {
  FieldType,
  IFieldOnEdit,
  IFieldOption,
  InputComponentPropsWithClose,
} from "@/types/field.types";
import { Field, Form, Formik } from "formik";
import {
  Button,
  Checkbox,
  Divider,
  DrawerFooter,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { editField } from "@/store/slices/fields.slice";
import { ChangeEvent, useState } from "react";
import { BaseIcon } from "@/components/ui/BaseIcon";
import { v4 as genId } from "uuid";

export const DrawerFormEdit = ({
  field,
  onCloseDrawer,
}: InputComponentPropsWithClose) => {
  const dispatch = useAppDispatch();
  const [fieldType, setFieldType] = useState<FieldType>(field.type);
  const [options, setOptions] = useState<IFieldOption[]>(
    field.type === "select" ? field.options : []
  );
  const [defaultValue, setDefaultValue] = useState("");
  const [currentOptionValue, setCurrentOptionValue] =
    useState<IFieldOption["value"]>("");

  const submitHandler = (
    values: IFieldOnEdit & { options: IFieldOption[] }
  ) => {
    if (fieldType !== "select") {
      const { options, ...withoutOptions } = values;
      values.defaultValue = defaultValue;
      dispatch(editField(withoutOptions));
      return;
    }
    values.options = options;
    values.defaultValue = defaultValue;
    dispatch(editField(values));
  };

  const initialValues: IFieldOnEdit & { options: IFieldOption[] } = {
    id: field.id,
    label: field.label,
    defaultValue: field.defaultValue,
    isRequired: field.isRequired,
    type: field.type,
    placeholder: field.placeholder,
    value: field.value,
    options,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form className="flex flex-col gap-4 h-full">
        <Field
          aria-label="checkbox input"
          name="isRequired"
          as={Checkbox}
          defaultSelected={field.isRequired}
        >
          Required field
        </Field>
        <Field
          aria-label="text input"
          name="label"
          as={Input}
          label="Field label"
          defaultValue={field.label}
        />
        <Field
          aria-label="select input"
          name="type"
          as={Select}
          label="Field type"
          defaultSelectedKeys={[field.type]}
          onSelectionChange={([key]: FieldType) => {
            setFieldType(key as FieldType);
          }}
        >
          <SelectItem key="text">Text</SelectItem>
          <SelectItem key="number">Number</SelectItem>
          <SelectItem key="select">Select</SelectItem>
          <SelectItem key="checkbox">Checkbox</SelectItem>
        </Field>
        <Field
          aria-label="text input"
          name="placeholder"
          as={Input}
          label="Field placeholder"
          defaultValue={field.placeholder}
        />
        {fieldType === "checkbox" ? (
          <Field
            aria-label="select input"
            name="defaultValue"
            as={Select}
            label="Default value"
            defaultSelectedKeys={[field.defaultValue?.toString()]}
            onSelectionChange={([key]: string) => {
              setDefaultValue(key);
            }}
          >
            <SelectItem key="true">True</SelectItem>
            <SelectItem key="false">False</SelectItem>
          </Field>
        ) : fieldType === "select" ? (
          <Field
            as={Select}
            aria-label="select input"
            name="defaultValue"
            defaultSelectedKeys={[options[0]?.label ?? null]}
            label="Default value"
            onSelectionChange={([key]: string) => {
              setDefaultValue(key);
            }}
          >
            {options.map((o) => (
              <SelectItem key={o.label}>{o.value}</SelectItem>
            ))}
          </Field>
        ) : fieldType === "number" ? (
          <Input
            aria-label="number input"
            type="number"
            defaultValue={"0"}
            label="Default value"
            name="defaultValue"
          >
            {options.map((o) => (
              <SelectItem key={o.label}>{o.value}</SelectItem>
            ))}
          </Input>
        ) : (
          <Field
            aria-label="text input"
            name="defaultValue"
            as={Input}
            label="Default value"
            defaultValue={field.defaultValue}
          />
        )}

        {fieldType === "select" ? (
          <>
            <Field
              aria-label="text input"
              as={Input}
              label="Set new option"
              size="md"
              value={currentOptionValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCurrentOptionValue(e.target.value)
              }
              endContent={
                <Button
                  size="sm"
                  color="primary"
                  isIconOnly
                  isDisabled={currentOptionValue.trim() === ""}
                  onPress={() => {
                    const opt = currentOptionValue.trim();
                    if (opt) {
                      setOptions((p) => [
                        ...p,
                        { id: genId(), label: opt, value: opt },
                      ]);
                    }
                    setCurrentOptionValue("");
                  }}
                >
                  <BaseIcon icon="Plus" size={18} color="light" />
                </Button>
              }
            />
            {options.length > 0 ? (
              <>
                <Divider />
                {options.map((o) => (
                  <Input
                    aria-label="text input"
                    value={o.value}
                    key={o.id}
                    endContent={
                      <Button
                        size="sm"
                        color="danger"
                        isIconOnly
                        onPress={() => {
                          setOptions((p) => p.filter((opt) => o.id !== opt.id));
                        }}
                      >
                        <BaseIcon icon="Trash" size={12} color="light" />
                      </Button>
                    }
                  />
                ))}
              </>
            ) : null}
          </>
        ) : null}

        <DrawerFooter className="p-0 mt-auto">
          <Button type="button" onPress={onCloseDrawer}>
            Close
          </Button>
          <Button type="submit" color="primary" onPress={onCloseDrawer}>
            Save
          </Button>
        </DrawerFooter>
      </Form>
    </Formik>
  );
};
