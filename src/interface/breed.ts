export interface IBreed {
  id: string;
  type: string;
  attributes: {
    name: string;
    description: string;
    life: {
      min: number;
      max: number;
    };
    male_weight: {
      min: number;
      max: number;
    };
    female_weight: {
      min: number;
      max: number;
    };
    hypoallergenic: boolean;
  };
  relationships: {
    group: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}
export interface BreedState {
  breeds: IBreed[];
}

export interface BreedsResponse {
  data: IBreed[];
  links: {
    self: string;
    current: string;
    next: string;
    last: string;
  };
}
