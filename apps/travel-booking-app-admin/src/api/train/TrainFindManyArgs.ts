import { TrainWhereInput } from "./TrainWhereInput";
import { TrainOrderByInput } from "./TrainOrderByInput";

export type TrainFindManyArgs = {
  where?: TrainWhereInput;
  orderBy?: Array<TrainOrderByInput>;
  skip?: number;
  take?: number;
};
