export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1)
  }
  return result;
}

export function createPages(pages, pagesCount, currentPage) {
  if(pagesCount > 6) {
    if(currentPage > 3) {
      for (let i = currentPage - 2; i <= currentPage + 3; i++) {
        pages.push(i)
        if(i === pagesCount) break;
      }
    }
    else {
      for (let i = 1; i <= 6; i++) {
        pages.push(i)
        if(i === pagesCount) break;
      }
    }
  }  else {
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
  }
}