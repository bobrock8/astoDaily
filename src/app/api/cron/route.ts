import { saveApod } from "../saveApod";
export const revalidate = 0;
export async function GET(request: Request) {
  try {
    await saveApod();
    return new Response(`Hello from cron`);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
