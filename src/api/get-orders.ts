import { api } from "@/lib/axios";

interface GetOrdersReposponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders() {
  try {
    const response = await api.get<GetOrdersReposponse>("/orders", {
      params: {
        pageIndex: 0,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
}
