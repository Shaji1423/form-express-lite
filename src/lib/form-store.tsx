import { createContext, useContext, useState, type ReactNode } from "react";

export interface FormDef {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface FormResponse {
  id: string;
  formId: string;
  formTitle: string;
  name: string;
  email: string;
  department: string;
  message: string;
  submittedAt: string;
}

interface Store {
  forms: FormDef[];
  responses: FormResponse[];
  addForm: (f: Omit<FormDef, "id" | "createdAt">) => void;
  addResponse: (r: Omit<FormResponse, "id" | "submittedAt">) => void;
}

const StoreContext = createContext<Store | null>(null);

const seedForms: FormDef[] = [
  {
    id: "f1",
    title: "Contact Us",
    description: "Reach out to our team with questions or feedback.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "f2",
    title: "Feedback Form",
    description: "Tell us about your experience using our product.",
    createdAt: new Date().toISOString(),
  },
];

const seedResponses: FormResponse[] = [
  {
    id: "r1",
    formId: "f1",
    formTitle: "Contact Us",
    name: "Alex Johnson",
    email: "alex@example.com",
    department: "Sales",
    message: "Interested in a demo.",
    submittedAt: new Date().toISOString(),
  },
];

export function FormStoreProvider({ children }: { children: ReactNode }) {
  const [forms, setForms] = useState<FormDef[]>(seedForms);
  const [responses, setResponses] = useState<FormResponse[]>(seedResponses);

  const addForm: Store["addForm"] = (f) => {
    setForms((prev) => [
      ...prev,
      { ...f, id: `f${Date.now()}`, createdAt: new Date().toISOString() },
    ]);
  };

  const addResponse: Store["addResponse"] = (r) => {
    setResponses((prev) => [
      ...prev,
      { ...r, id: `r${Date.now()}`, submittedAt: new Date().toISOString() },
    ]);
  };

  return (
    <StoreContext.Provider value={{ forms, responses, addForm, addResponse }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside FormStoreProvider");
  return ctx;
}
