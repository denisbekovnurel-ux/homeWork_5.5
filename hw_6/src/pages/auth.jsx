import { useSearchParam } from "../hooks/use-search-param.js";
import { LoginForm } from "../components/login-form.jsx";
import { RegisterForm } from "../components/register-form.jsx";

export function Auth() {
  const { get } = useSearchParam();

  const currentStep = get("step");

  const forms = {
    login: <LoginForm />,
    register: <RegisterForm />,
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#f3f7f5] px-4 py-10">
      <div className="w-full max-w-md">{forms[currentStep] ?? forms.login}</div>
    </div>
  );
}
