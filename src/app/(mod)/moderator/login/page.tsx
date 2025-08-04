import { UserCheck } from "lucide-react";
import { ModLoginForm } from "./login-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ModLoginPage = () => {
  return (
    <div className="flex flex-col md:items-center md:justify-center min-h-screen gap-y-6 p-2 mt-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-3">
            <UserCheck />
            Moderator Login Page
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ModLoginForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground text-center">
            Sign-in with your assigned moderator username and password. For any
            queries contact the admin.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ModLoginPage;
