export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { page = '1', sort = 'asc', query = '' } = await searchParams
  console.log({ page, sort, query })
  return (
    <div>
      <h1>Product Listing</h1>
      <p>Search query: {typeof query}</p>
      <p>Current page: {typeof page}</p>
      <p>Sort order: {sort}</p>
    </div>
  )
}
