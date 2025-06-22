import { FORM } from "@/api/endpoints/form";
import { fetchAPI } from "@/api/fetchApi";
import { FormField } from "@/components/forms/FormField";
import { AsideMenu } from "@/components/layout/AsideMenu";
import { Header } from "@/components/layout/Header";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { IField } from "@/types/field.types";
import { createValidationSchema } from "@/utils/createValidationSchema";
import { toastify } from "@/utils/toastify";
import { Button, Divider } from "@heroui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { FC, useMemo } from "react";

export const HomePage: FC = () => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const { formName, fields, formId } = useAppSelector(
    (store) => store.fieldsSlice
  );

  const formSubmitHandler = async (
    values: typeof initialValues,
    { setErrors }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      setErrors({});
      const formData = {
        form_id: formId,
        form_name: formName,
        fields,
      };

      await fetchAPI(FORM.save, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      toastify.success({ title: "Form was submitted successfully" });
    } catch (error) {
      console.error(error);
      toastify.danger({
        title: "Something went wrong!",
        description: "Error while submitting form!",
      });
    }
  };

  const initialValues = useMemo(
    () =>
      fields.reduce<Record<string, IField["defaultValue"]>>((acc, cur) => {
        acc[cur.name] = cur.defaultValue;
        return acc;
      }, {}),
    [fields]
  );

  return (
    <section className="flex flex-col h-screen">
      <Header />
      <div className="flex relative flex-1 w-full overflow-hidden">
        <AsideMenu />
        <main className="flex flex-col flex-1 items-center justify-center w-full h-full ">
          <div className="w-full min-h-full overflow-y-auto">
            <Formik
              initialValues={initialValues}
              onSubmit={formSubmitHandler}
              validationSchema={createValidationSchema(fields)}
            >
              {({ errors, isSubmitting }) => (
                <Form
                  id={formId}
                  className="mx-auto my-4 flex flex-col gap-6 w-2/3 min-h-96 shadow-2xl border-2 border-gray-100 rounded-2xl px-6 py-8"
                >
                  <h1 className="text-3xl font-bold">{formName}</h1>
                  {isEditMode ? (
                    <>
                      <span>Configure your form fields below</span>
                      <Divider />
                    </>
                  ) : null}
                  {fields.length > 0 ? (
                    fields.map((f) => (
                      <FormField field={f} key={f.id} errors={errors} />
                    ))
                  ) : (
                    <span className="text-gray-500 text-center text-sm">
                      No fields added yet. Click on a field type above to get
                      started
                    </span>
                  )}
                  <Button
                    isDisabled={isEditMode || isSubmitting}
                    isLoading={isSubmitting}
                    type="submit"
                    variant="solid"
                    color="primary"
                  >
                    Submit Form
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </main>
      </div>
    </section>
  );
};
