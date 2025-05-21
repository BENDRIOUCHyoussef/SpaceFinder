import { SpaceType } from "./spaceType.model";

export interface UpdateSpaceRequest {
  title: string;
  description: string;
  address: string;
  postCode: string;
  city: string;
  price: number;
  deposit: number;
  billsIncluded: boolean;
  availableFrom: string;
  spaceType: SpaceType;
  numberOfRooms: number;
  numberOfBathrooms: number;
  furnished: boolean;
}