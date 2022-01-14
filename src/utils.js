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

export function calculateStatus(isDone, isTextChanged) {
  if (isDone && isTextChanged) return 11;
  if (!isDone && isTextChanged) return 1;
  if (isDone) return 10;
  return 0;
}