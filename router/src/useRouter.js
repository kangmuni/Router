const useRouter = () => {
  const push = (path) => {
    window.history.pushState({}, '', path); //state, title, url
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return { push };
};

export default useRouter;
