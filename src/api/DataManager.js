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
  getAllByCategory(tab, companyId, categoryType, categoryId) {
    return fetch(
      `${remoteURL}/${tab}?company=${companyId}&${categoryType}=${categoryId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
        },
      }
    ).then((response) => response.json());
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
  getCurrentUser() {
    return fetch(`${remoteURL}/employee/loggedInEmployee`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
      },
    }).then((response) => response.json());
  },
  post(tab, obj) {
    return fetch(`${remoteURL}/${tab}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
      },
      body: JSON.stringify(obj),
    });
  },
  put(tab, id, obj) {
    return fetch(`${remoteURL}/${tab}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
      },
      body: JSON.stringify(obj),
    });
  },
  delete(tab, id) {
    return fetch(`${remoteURL}/${tab}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("PRIX_token")}`,
      },
    });
  },
};
