import { http, HttpResponse } from "msw";

import { GetDayOrdersAmountResponse } from "../get-day-orders-amount";

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>("/metrics/day-orders-amount", () => {
  return new HttpResponse(
    JSON.stringify({
      amount: 20,
      diffFromYesterday: 10,
    }),
    {
      status: 200,
    },
  );
});
