export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6/cards',
  headers: {
    authorization: '5502817d-dfaa-490b-a84a-6a16353d0f1d',
    "Content-Type": "application/json",
  }

};
const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
