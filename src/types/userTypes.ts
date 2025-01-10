export type User = {
  login: { uuid: string };
  email: string;
  gender: string;
  name: { title: string; first: string; last: string };
  picture: { large: string };
  location: {
    country: string;
    city: string;
    state: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  saved?: boolean;
};
