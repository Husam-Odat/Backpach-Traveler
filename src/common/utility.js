export const saveCurrentUrl = () => {
    sessionStorage.setItem('redirectUrl', window.location.pathname);
  };