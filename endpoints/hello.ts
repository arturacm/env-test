// Example ChiselStrike endpoint.
//
// To access the endpoint, run:
//
// curl -d '{"hello": "world"}' localhost:8080/dev/hello
import { getSecret } from "@chiselstrike/api";

export default async function (req: Request): Promise<Response> {
  const secret = getSecret("TEXTO");
  const response = secret;
  return new Response(`${secret}`);
}
