export async function getItems() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  console.log("I'm in get item:", data);
  return data;
}
