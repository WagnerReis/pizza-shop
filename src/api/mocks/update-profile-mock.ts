import { http, HttpResponse } from "msw";

import { UpdateProfileBody } from "../update-profile";

export const updateProfileMock = http.put<never, never, UpdateProfileBody>(
  "/profile",
  async ({ request }) => {
    const { name } = await request.json();

    if (name === "Rocket pizza") {
      return new HttpResponse(null, { status: 204 });
    }

    return new HttpResponse(null, { status: 400 });
  },
);
