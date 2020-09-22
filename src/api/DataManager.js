const remoteURL = "http://localhost:8000";

export default {
  getAll(tab, companyId) {
    return fetch(`${remoteURL}/${tab}?company=${companyId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
      },
    }).then((response) => response.json());
  },
};
