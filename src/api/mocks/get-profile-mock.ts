import { http, HttpResponse } from "msw";

import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return new HttpResponse(
      JSON.stringify({
        id: "custom-user-id",
        name: "John Doe",
        email: "john@doe.com",
        phone: "123456789",
        role: "manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      {
        status: 200,
      },
    );
  },
);
