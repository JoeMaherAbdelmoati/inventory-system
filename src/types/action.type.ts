import { stateType } from "@/types/store.type";

export type contextType={
  commit: (mutationType: string, data?: any) => void;
  state: stateType;
}
