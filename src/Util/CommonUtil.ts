export const capitalizeFirstLetter = (text: string) => {
    if (text) {
      return text.split(' ').map((word: string, index: any) => {
        return (
          (index > 0 ? ' ' : '') +
          word.charAt(0).toUpperCase() +
          word.toLowerCase().slice(1)
        );
      });
    }
};