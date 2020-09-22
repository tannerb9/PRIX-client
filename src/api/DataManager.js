const remoteURL = "http://localhost:8000";

export default {
  get(tab, id) {
    return fetch(`${remoteURL}/${tab}/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
      },
    }).then((response) => response.json());
  },
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
