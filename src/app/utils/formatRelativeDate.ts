export function formatRelativeDate(inputDate: Date): string {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * oneHour;
    const oneWeek = 7 * oneDay;
    const oneMonth = 30 * oneDay;
    const oneYear = 365 * oneDay;
  
    if (timeDifference < oneHour) {
      // Less than 1 hour ago
      const minutes = Math.floor(timeDifference / (60 * 1000));
      return `${minutes} minutes ago`;
    } else if (timeDifference < oneDay) {
      // Less than 24 hours ago
      const hours = Math.floor(timeDifference / oneHour);
      const minutes = Math.floor((timeDifference % oneHour) / (60 * 1000));
      return `${hours} hours`;
    } else if (timeDifference < oneWeek) {
      // Less than 1 week ago
      const days = Math.floor(timeDifference / oneDay);
      return `${days} days ago`;
    } else if (timeDifference < oneMonth) {
      // Less than 1 month ago
      const weeks = Math.floor(timeDifference / oneWeek);
      return `${weeks} weeks ago`;
    } else if (timeDifference < oneYear) {
      // Less than 1 year ago
      const months = Math.floor(timeDifference / oneMonth);
      return `${months} months ago`;
    } else {
      // More than 1 year ago;
      return inputDate.toLocaleDateString();
    }
  }