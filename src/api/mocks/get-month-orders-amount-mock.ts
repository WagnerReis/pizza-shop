import { http, HttpResponse } from "msw";

import { GetMonthOrdersAmountResponse } from "../get-month-orders-amount";

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("/metrics/month-orders-amount", () => {
  return new HttpResponse(
    JSON.stringify({
      amount: 200,
      diffFromLastMonth: 7,
    }),
    {
      status: 200,
    },
  );
});
