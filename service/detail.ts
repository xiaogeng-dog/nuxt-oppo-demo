import type { IDetailProductType, IDetailData } from "@/types/detail.d";
import type { IResultData } from "@/types/global.d";
import request from "./index";

export const getDetailInfo = (type: IDetailProductType) =>
  request.get<IResultData<IDetailData[]>>("/oppoDetail", { type });
