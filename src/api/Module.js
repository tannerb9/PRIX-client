const remoteURL = "http://localhost:8000";

export default {
  getIngredients(companyId) {
    if (isAuthenticated()) {
      return fetch(
        `${remoteURL}/ingredient?company=${companyId}`
      ).then((data) => data.json());
    }
  },
};
