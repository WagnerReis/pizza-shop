import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableFilters } from "./order-table-filters";
import { OrderTableRow } from "./order-table-row";
import { Pagination } from "@/components/pagination";

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="2-[64px]"></TableHead>
                  <TableHead className="2-[140px]">Identificador</TableHead>
                  <TableHead className="2-[180px]">Realizado há</TableHead>
                  <TableHead className="2-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="2-[140px]">Total do pedido</TableHead>
                  <TableHead className="2-[164px]"></TableHead>
                  <TableHead className="2-[132px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => {
                  return <OrderTableRow key={index} />;
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  );
}
