import { http, HttpResponse } from "msw";

import { GetMonthRevenueResponse } from "../get-month-revenue";

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/month-receipt", () => {
  return new HttpResponse(
    JSON.stringify({
      receipt: 20000,
      diffFromLastMonth: 10,
    }),
    {
      status: 200,
    },
  );
});
