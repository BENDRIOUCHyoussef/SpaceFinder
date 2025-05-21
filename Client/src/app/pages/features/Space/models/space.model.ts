import { SpaceType } from "./spaceType.model";

// space.model.ts
export interface Space {
  id: string;
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
  publishedDate: string;
  isVisible: boolean;
  imageUrl: string
  }

  
// space-image.model.ts
export interface SpaceImage {
  id?: string;
  spaceId?: string;
  fileName: string;
  fileExtension: string;
  title: string;
  imageUrl: string;
  createdAt?: Date;
}

// create-space-request.model.ts
export interface CreateSpaceRequest {
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

// upload-images-request.model.ts
export interface UploadImagesRequest {
  spaceId: string;
  images: {
    file: File;
    title: string;
  }[];
}

