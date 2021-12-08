function showError(
    message = "This is a error message",
    classType = "information"
  ) {
    return `<div class="${classType}">${message}</div>`;
  }
  