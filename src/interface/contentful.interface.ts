import { EntrySkeletonType } from "contentful";

export interface IContentful extends EntrySkeletonType {
  total: number;
  skip: number;
  limit: number;
  items: {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          type: string;
          linkType: string;
        };
      };
      revision: number;
      locale: string;
    };
    fields: {
      title: string;
      photo: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      tags?: {
        fields: {
          name: string;
        };
      }[];
      description: string;
      chef?: {
        sys: {
          id: string;
        };
      };
    };
  }[];
  includes: {
    Entry?: {
      sys: {
        space: {
          sys: {
            type: string;
            linkType: string;
            id: string;
          };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: string;
            linkType: string;
          };
        };
        revision: number;
        contentType: {
          sys: {
            type: string;
            linkType: string;
            id: string;
          };
        };
        locale: string;
      };
      fields: {
        name: string;
      };
    }[];
    Asset?: {
      sys: {
        space: {
          sys: {
            type: string;
            linkType: string;
            id: string;
          };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: string;
            linkType: string;
          };
        };
        revision: number;
        locale: string;
      };
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    }[];
  };
}
