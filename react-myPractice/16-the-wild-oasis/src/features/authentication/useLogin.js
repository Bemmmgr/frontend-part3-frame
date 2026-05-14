import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// 29016 -
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      //   console.log(user);
      //   munally set data in the react query cache
      queryClient.setQueryData(["user", user.user]);
      navigate("/dashboard", { replace: true });
    },

    onError: () => {
      //   console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
