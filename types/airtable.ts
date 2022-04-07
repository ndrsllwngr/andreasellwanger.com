type Tool = {
  id: string;
  fields: {
    affiliate: boolean;
    description: string;
    id: number;
    image?: string;
    link: string;
    name: string;
    platform: Array<string>;
  };
};

type Project = {
  id: string;
  fields: {
    created: Date;
    date: string;
    description: string;
    featured?: boolean;
    featured_order?: number;
    id: number;
    image?: string;
    last_modified: Date;
    link: string;
    name: string;
    order: number;
    stack: Array<string>;
  };
};

export type { Tool, Project };
