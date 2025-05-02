import { http, HttpResponse } from "msw";

import { GetMonthCanceledOrdersAmountResponse } from "../get-month-canceled-orders-amount";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return new HttpResponse(
    JSON.stringify({
      amount: 5,
      diffFromLastMonth: -5,
    }),
    {
      status: 200,
    },
  );
});
