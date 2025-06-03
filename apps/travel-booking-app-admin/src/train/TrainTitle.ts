import { Train as TTrain } from "../api/train/Train";

export const TRAIN_TITLE_FIELD = "trainName";

export const TrainTitle = (record: TTrain): string => {
  return record.trainName?.toString() || String(record.id);
};
