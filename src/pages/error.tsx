import { Link, useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError() as Error;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Opss, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo voce encontra mais detalhes:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      {/* recomendado não usar em prd, enviar erro para alguma plataforma de observabilidade por exemp */}
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
}
