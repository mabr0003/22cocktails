const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supaKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getCocktails() {
  const response = await fetch(url + "/cocktails", {
    method: "GET",
    headers: {
      apikey: supaKey,
    },
  });

  const data = await response.json();
  return data;
}
export async function getReviews() {
  const response = await fetch(url + "/reviews", {
    method: "GET",
    headers: {
      apikey: supaKey,
    },
  });

  const data = await response.json();
  return data;
}
