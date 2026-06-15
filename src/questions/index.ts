type Question = {
  id: string;
  text: string;
  is_entry?: boolean;
  options?: { text: string; next_id: string }[];
};

type Terminus = {
  id: string;
  is_end: boolean;
};

export type NodeList = (Question | Terminus)[];
