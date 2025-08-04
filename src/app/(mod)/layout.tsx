import { ModHeader } from "./mod-header";

type Props = {
  children: React.ReactNode;
};

const ModLayout = ({ children }: Props) => {
  return (
    <div>
      <ModHeader />
      {children}
    </div>
  );
};
export default ModLayout;
