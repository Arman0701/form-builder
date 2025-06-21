import { FormField } from "@/components/forms/FormField";
import { AsideMenu } from "@/components/layout/AsideMenu";
import { Header } from "@/components/layout/Header";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { Divider } from "@heroui/react";
import { FC } from "react";

export const HomePage: FC = () => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const { formName, fields } = useAppSelector((store) => store.fieldsSlice);

  return (
    <section className="flex flex-col h-screen">
      <Header />
      <div className="flex relative flex-1 w-full overflow-hidden">
        <AsideMenu />
        <main className="flex flex-col flex-1 items-center justify-center w-full h-full ">
          <div className="w-full min-h-full overflow-y-auto">
            <form className="mx-auto flex flex-col gap-6 w-2/3 min-h-96 shadow-2xl border-2 border-gray-100 rounded-2xl px-6 py-8">
              <h1 className="text-3xl font-bold">{formName}</h1>
              {isEditMode ? (
                <>
                  <span>Configure your form fields below</span>
                  <Divider className="my-6" />
                </>
              ) : null}
              {fields.map((f) => (
                <FormField field={f} />
              ))}
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};
