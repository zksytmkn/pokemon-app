export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  img: string | undefined;
  officialImg: string | undefined;
  sprites?: {
    front_default: string;
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  type?: string | null;
  flavor_text?: string;
  species?: {
    url: string;
  };
};

export type SpeciesItem = {
  genera: {
    length: number;
    [index: number]: {
      genus: string;
    };
  };
  names: {
    [index: number]: {
      name: string;
    };
  };
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
    };
  }>;
};
