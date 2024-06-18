export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('pt', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
