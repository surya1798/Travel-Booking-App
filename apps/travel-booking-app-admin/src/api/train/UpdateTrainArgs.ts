import { TrainWhereUniqueInput } from "./TrainWhereUniqueInput";
import { TrainUpdateInput } from "./TrainUpdateInput";

export type UpdateTrainArgs = {
  where: TrainWhereUniqueInput;
  data: TrainUpdateInput;
};
