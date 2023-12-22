export const useReset = () => {
  const resetUrl = () => {
    setTimeout(() => {
      window.history.pushState({}, "", "/");
    });
  };

  return resetUrl;
};
